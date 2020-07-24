import { doGetRequest, doPostRequest } from '../base/base';
import CustomProfilesById from '../interfaces/types/CustomProfilesByIdTypes';
import DirectMessagesEventsShow from '../interfaces/types/DirectMessagesEventsShowTypes';
import DirectMessagesEventsNewMessageCreate from '../interfaces/types/DirectMessagesEventsNewMessageCreateTypes';
import DirectMessagesWelcomeMessagesRulesShow from '../interfaces/types/DirectMessagesWelcomeMessagesRulesShowTypes';
import DirectMessagesWelcomeMessagesShow from '../interfaces/types/DirectMessagesWelcomeMessagesShowTypes';
import DirectMessagesWelcomeMessagesNew from '../interfaces/types/DirectMessagesWelcomeMessagesNewTypes';
import DirectMessagesWelcomeMessagesRulesNew from '../interfaces/types/DirectMessagesWelcomeMessagesRulesNewTypes';

class DirectMessagesClient {
  /**
   * Returns a custom profile that was created with POST custom_profiles/new.json.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/custom-profiles/api-reference/get-profile
   */
  public async customProfilesById() {
    return await doGetRequest<CustomProfilesById>('https://api.twitter.com/1.1/custom_profiles/:id.json');
  }

  /**
   *  Returns a single Direct Message event by the given id.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/get-event
   */
  public async directMessagesEventsShow() {
    return await doGetRequest<DirectMessagesEventsShow>('https://api.twitter.com/1.1/direct_messages/events/show.json');
  }

  /**
   *  Publishes a new message_create event resulting in a Direct Message sent to a specified user from the authenticating user. Returns an event if successful. Supports publishing Direct Messages with optional Quick Reply and media attachment. Replaces behavior currently provided by POST direct_messages/new.Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/new-event
   */
  public async directMessagesEventsNewMessageCreate() {
    return await doPostRequest<DirectMessagesEventsNewMessageCreate>('https://api.twitter.com/1.1/direct_messages/events/new.json');
  }

  /**
   *  Displays a visual typing indicator in the recipient’s Direct Message conversation view with the sender. Each request triggers a typing indicator animation with a duration of ~3 seconds.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/typing-indicator-and-read-receipts/api-reference/new-typing-indicator
   */
  public async directMessagesIndicateTyping() {
    return await doPostRequest('https://api.twitter.com/1.1/direct_messages/indicate_typing.json');
  }

  /**
   *  Returns a Welcome Message Rule by the given id.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message-rule
   */
  public async directMessagesWelcomeMessagesRulesShow() {
    return await doGetRequest<DirectMessagesWelcomeMessagesRulesShow>('https://api.twitter.com/1.1/direct_messages/welcome_messages/rules/show.json');
  }

  /**
   *  Returns a Welcome Message by the given id.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message
   */
  public async directMessagesWelcomeMessagesShow() {
    return await doGetRequest<DirectMessagesWelcomeMessagesShow>('https://api.twitter.com/1.1/direct_messages/welcome_messages/show.json');
  }

  /**
   *  Creates a new Welcome Message that will be stored and sent in the future from the authenticating user in defined circumstances. Returns the message template if successful. Supports publishing with the same elements as Direct Messages (e.g. Quick Replies, media attachments).Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.See the Welcome Messages overview to learn how to work with Welcome Messages.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message
   */
  public async directMessagesWelcomeMessagesNew() {
    return await doPostRequest<DirectMessagesWelcomeMessagesNew>('https://api.twitter.com/1.1/direct_messages/welcome_messages/new.json');
  }

  /**
   *  Creates a new Welcome Message Rule that determines which Welcome Message will be shown in a given conversation. Returns the created rule if successful.Requires a JSON POST body and Content-Type header to be set to application/json. Setting Content-Length may also be required if it is not automatically.Additional rule configurations are forthcoming. For the initial beta release, the most recently created Rule will always take precedence, and the assigned Welcome Message will be displayed in the conversation.See the Welcome Messages overview to learn how to work with Welcome Messages.
   *
   * @link https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message-rule
   */
  public async directMessagesWelcomeMessagesRulesNew() {
    return await doPostRequest<DirectMessagesWelcomeMessagesRulesNew>('https://api.twitter.com/1.1/direct_messages/welcome_messages/rules/new.json');
  }

}

export default DirectMessagesClient;
