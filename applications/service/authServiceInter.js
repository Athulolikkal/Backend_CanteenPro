export default function authServicesInterface(repositories) {
    const passwordBcrypt = (password) => repositories.passwordBcrypt(password)
    const comparePassword = (passwordDb, password) => repositories.comparePassword(passwordDb, password)
    const createRefreshToken = (user,role) => repositories.createRefreshToken(user,role)
    const createAccessToken = (user,role) => repositories.createAccessToken(user,role)


    return {
        passwordBcrypt,
        comparePassword,
        createAccessToken,
        createRefreshToken
    }
}