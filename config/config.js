export default{
    port:process.env.PORT||3000,
    mongo:{
        uri:process.env.URL||'mongodb://0.0.0.0:27017/canteenPro'
    },
    jwtUserAccessSecretKey:process.env.JWT_USER_SECRET_TOKEN||'secretidofUserAccessTokenjwt',
    jwtUserRefreshSecretKey:process.env.JWT_USER_REFRESH_SECRET_TOKEN||'secretidofUserRefreshTokenjwt',
    jwtCanteenAccessSecretKey:process.env.JWT_CANTEEN_SECRET_TOKEN||'secretidofCanteenAccessTokenjwt',
    jwtCanteenRefreshSecretKey:process.env.JWT_CANTEEN_REFRESH_SECRET_TOKEN||'secretidofCanteenRefreshTokenjwt',
   
   
    // jwtAccessSecretKey:process.env.JWT_SECRET_TOKEN||'secretidofAccessTokenjwt',
    // jwtRefreshSecretKey:process.env.JWT_REFRESH_SECRET_TOKEN||'secretidofRefreshTokenjwt'
}