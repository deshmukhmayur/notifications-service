declare type Notif = {
  id?: any
  payload: any
  notificationType: Notif.Type
  subscriptionID: string
  createdOn: Date
  expiresOn: Date
}

declare namespace Notif {
  declare const enum Type {
    PULL = 'PULL',
    PUSH = 'PUSH',
    EMAIL = 'EMAIL',
  }
}