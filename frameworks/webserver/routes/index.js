import register from './register.js'
import login from './login.js'
import commonServices from './commonServices.js'

export default function routes(app,express){
app.use('/usersignup',register(express))
app.use('/userlogin',login(express))
app.use('/service',commonServices(express))

}