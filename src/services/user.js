const User = require('../models/User');

module.exports = {
    findUser: async ( id ) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (e) {
        return e
    }
    },

    findAllUsers: async () => {
        try {
            const users = await User.find();
            return users;
        } catch (e) {
            return e
        }
    },

    createUser: async (user) => {
        const userData = new User(user)
        try {
            const saveUser = await userData.save()
            return saveUser
        } catch (e) {
            return e
        }
    },

    updateUser: async ( userID, userUpdatedData ) => {
        try {
            const updatedUser = await User.updateOne(
                {_id: userID},
                {
                    $set: {
                        password: userUpdatedData.password,
                        role: userUpdatedData.role
                    }
                }
            )
            return updatedUser
        } catch (e) {
            return e
        }
    },

    deleteUser: async ( userID ) => {
        try {
            const deletedUser = await User.deleteOne(
                { _id: userID }
            );
            return deletedUser
        } catch (error) {
            
        }
    }
}