declare type Subscription = {
  id?: any,
  content: string,
  contentType: Subscription.SubscriptionContentType,
  action: Subscription.SubscriptionAction,
  actor: any,
}

declare namespace Subscription {
  declare const enum SubscriptionContentType {
    POST = 'POST',
    COMMENT = 'COMMENT',
  }

  declare const enum SubscriptionAction {
    NEW = 'NEW',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
  }
}
