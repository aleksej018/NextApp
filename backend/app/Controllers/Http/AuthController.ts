import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'
import User from 'App/Models/User'
import LoginUserValidator from 'App/Validators/LoginUserValidator'

export default class AuthController {
  async register({ request, response }: HttpContextContract) {
    let registerValue = await request.validate(RegisterUserValidator)
    registerValue['profileUrl'] = 'images/defaultAvatar.png'

    const user = await User.create(registerValue)
    return user
  }

  async login({ request, response, auth }: HttpContextContract) {
    let loginValue = await request.validate(LoginUserValidator)
    return auth
      .use('api')
      .attempt(loginValue.username, loginValue.password, { expiresIn: '7 days' })
  }

  async logout({ auth }: HttpContextContract) {
    return auth.use('api').logout()
  }

  async me({ auth }: HttpContextContract) {
    return auth.user
  }
}
