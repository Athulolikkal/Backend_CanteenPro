export default function authServicesInterface(repositories) {
    const passwordBcrypt = (password) => repositories.passwordBcrypt(password)
    const comparePassword = (passwordDb, password) => repositories.comparePassword(passwordDb, password)
    const createRefreshToken = (user) => repositories.createRefreshToken(user)
    const createAccessToken = (user) => repositories.createAccessToken(user)


    return {
        passwordBcrypt,
        comparePassword,
        createAccessToken,
        createRefreshToken
    }
}