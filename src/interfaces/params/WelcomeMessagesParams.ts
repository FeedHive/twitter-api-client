export interface DirectMessagesWelcomeMessagesRulesShowParams {
  /**
  * The id of the Welcome Message Rule that should be returned.
  */
  id: string;
}

export interface DirectMessagesWelcomeMessagesShowParams {
  /**
  * The id of the Welcome Message that should be returned.
  */
  id: string;
}

export interface DirectMessagesWelcomeMessagesNewParams {
  /**
  * The Message Data Object defining the content of the message template. See POST direct_messages/events/new (message_create) for Message Data object details.
  */
  message_data: string;
  /**
  * A human readable name for the Welcome Message. This is not displayed to the user. Max length of 100 alpha numeric characters including hyphens, underscores, spaces, hashes and at signs.
  */
  name?: string;
}

export interface DirectMessagesWelcomeMessagesRulesNewParams {
  /**
  * The ID of the Welcome Message that will be sent when this Rule is triggered.
  */
  welcome_message_id: string;
}
