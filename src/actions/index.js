const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const MESSAGES = createRequestTypes('MESSAGES')

export const LOAD_MESSAGES = 'LOAD_MESSAGES'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const messages = {
  request: binId => action(MESSAGES[REQUEST], {binId, isLoading: true}),
  success: (binId, response) => action(MESSAGES[SUCCESS], {binId, response}),
  failure: (binId, error) => {
    return action(MESSAGES[FAILURE], {binId, error});
  }
}

export const loadMessages = (binId, requiredFields = []) => action(LOAD_MESSAGES, {binId, requiredFields})