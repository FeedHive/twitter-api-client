export interface DELETEDirectMessagesEventsDestroyParams {
  /**
  * The id of the Direct Message event that should be deleted.
  */
  id: string;
}

export interface DirectMessagesEventsShowParams {
  /**
  * The id of the Direct Message event that should be returned.
  */
  id: string;
}

export interface DirectMessagesEventsNewMessageCreateParams {
  /**
  * The ID of the user who should receive the direct message.
  */
  id: string;
  /**
  * The Message Data Object defining the content to deliver to the reciepient.
  */
  data: string;
}
