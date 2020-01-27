import { put, fork, select, all, take, call } from 'redux-saga/effects'
import { getMessages } from 'reducers/selectors'
import { api } from 'services'
import { messages, LOAD_MESSAGES } from 'actions'

function* fetchEntity(entity, apiFn, id) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, id)
  if(response)
    yield put( entity.success(id, response) )
  else
    yield put( entity.failure(id, error) )
}

export const fetchMessages = fetchEntity.bind(null, messages, api.fetchMessages);

function* loadMessages(binId, requiredFields) {
  const messages = yield select(getMessages, binId)
  if (!messages || requiredFields.some(key => !messages.hasOwnProperty(key))) {
    yield call(fetchMessages, binId)
  }
}

function* watchLoadMessages() {
  while(true) {
    const {binId, requiredFields = []} = yield take(LOAD_MESSAGES)
    yield fork(loadMessages, binId, requiredFields)
  }
}


export default function* rootSaga() {
  yield all([
    fork(watchLoadMessages),
  ])
}