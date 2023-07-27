import config from '../../../framework/config/config.js'
import LoginPage from '../../../framework/pages/LoginPage.js'
import MainPage from '../../../framework/pages/MainPage.js'

describe('Авторизация', () => {
    beforeEach(() => {
        LoginPage.login(config.credentials.userconfig.creden)
        MainPage.visit()
    })

    it('Проверка меню', () => {
        MainPage.getMenu().getActiveItem().contains('Overview')
    })
})