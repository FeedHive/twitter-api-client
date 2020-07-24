export default interface DirectMessagesEventsNewMessageCreate {
  event: Event;
}

export interface Event {
  type: string;
  message_create: Messagecreate;
}

export interface Messagecreate {
  target: Target;
  message_data: Messagedata;
}

export interface Messagedata {
  text: string;
}

export interface Target {
  recipient_id: string;
}

