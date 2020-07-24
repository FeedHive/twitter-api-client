export default interface DirectMessagesWelcomeMessagesNew {
  welcome_message: Welcomemessage;
  name: string;
}

export interface Welcomemessage {
  id: string;
  created_timestamp: string;
  message_data: Messagedata;
}

export interface Messagedata {
  text: string;
  attachment: Attachment;
}

export interface Attachment {
  type: string;
  media: Media;
}

export interface Media {
}

