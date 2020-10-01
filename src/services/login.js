const User = require('../models/User');
const RefreshToken = require('../models/refresh-token');

module.exports = {
    validateLogin: async (username, password) => {
        try {
            const champion = await User.findOne({usuario : username, contrasena: password});
            return champion;
          } catch (e) {
            throw new Error(e.message)
          }
    },

    saveToken: async (token) => {
        try {
          const tokenData = new RefreshToken({
          token: token
          });
          const saveToken = await tokenData.save();
          return saveToken;
        } catch (e) {
          throw new Error(e.message)
        }
    },

    validateToken: async (token) =>{
        try {
          const refreshToken = await RefreshToken.findOne({ token: token });
          return refreshToken;
        } catch (e) {
          throw new Error(e.message)
        }
    },

    deleteRefreshToken: async (token) => {
        try {
          const refreshToken = await RefreshToken.findOne({ token: token });
          if (refreshToken != null) {
            const deleteToken = await RefreshToken.deleteOne({ token: token });
            return 'Token eliminado'
          }
          else return 'No existe el token a eliminar'
        } catch (e) {
          throw new Error(e.message)
        }
    }
}