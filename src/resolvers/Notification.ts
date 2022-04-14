export default {
  Query: {
    notifications: (parent: any, args: any, ctx: any) => {
      return [{
        id: 'test',
        payload: '',
        notificationType: '',
      }]
    }
  }
}