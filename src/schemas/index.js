import { schema } from 'normalizr'

const messageSchema = new schema.Entity('messages', {}, {
  idAttribute: 'key',
});

export const responseMessageSchema = { messages: new schema.Array(messageSchema) };
