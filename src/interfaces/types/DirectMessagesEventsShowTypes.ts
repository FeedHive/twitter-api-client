export default interface DirectMessagesEventsShow {
  event: Event;
}

export interface Event {
  id: string;
  created_timestamp: string;
  type: string;
  message_create: Messagecreate;
}

export interface Messagecreate {
}

