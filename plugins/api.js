export default ({ app: { $request } }, inject) => {
  inject('api', {
    /**
     * 登录验证
     * @param {string} password - 密码
     * @param {string} phoneNumber - 手机号码
     */
    loginAuth(data) {
      return $request.post('/v1/auth/login', data)
    },
    /**
     * 身份验证
     */
    isAuth() {
      return $request.get('/v1/auth/authentication')
    },
    
  })
}