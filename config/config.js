export default{
    port:process.env.PORT||3000,
    mongo:{
        uri:process.env.URL||'mongodb://0.0.0.0:27017/canteenPro'
    },
    jwtAccessSecretKey:process.env.JWT_SECRET_TOKEN||'secretidofAccessTokenjwt',
    jwtRefreshSecretKey:process.env.JWT_REFRESH_SECRET_TOKEN||'secretidofRefreshTokenjwt'
}