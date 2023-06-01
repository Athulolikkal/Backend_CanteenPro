import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config/config.js'

export default function authSerivecs() {
       const passwordBcrypt = async (password) => {
              const salt = await bcrypt.genSalt(10);
              const hashPassword = await bcrypt.hash(password, salt)
              return hashPassword
       }

       const comparePassword = async (passwordDb, password) => {
              const isPassword = await bcrypt.compare(password, passwordDb)
              return isPassword
       }

       const createAccessToken = async (user) => {
              const accessToken = jwt.sign(user, config.jwtAccessSecretKey, { expiresIn: '15m' })
              return accessToken
       }

       const createRefreshToken = async (user) => {
              const refreshToken = jwt.sign(user, config.jwtRefreshSecretKey, { expiresIn: '7d' })
              return refreshToken
       }

       return {
              passwordBcrypt,
              comparePassword,
              createAccessToken,
              createRefreshToken

       }
}