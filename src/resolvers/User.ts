export default {
  Query: {
    users: (parent: any, args: any, { Users }: any) => {
      return Users.find().exec()
    },
    user: (parent: any, { id }: any, { Users }: any) => {
      return Users.findById(id).exec()
    },
  },
  Mutation: {
    createUser: (parent: any, { user }: any, { Users }: any) => {
      return new Users(user).save()
    },
  },
  User: {
    readNotifications: (parent: any, args: any, ctx: any) => {
      return []
    },
  },
}
