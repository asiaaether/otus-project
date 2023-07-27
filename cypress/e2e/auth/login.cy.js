import config from '../../../framework/config/config.js'
import LoginPage from '../../../framework/pages/LoginPage.js'

describe('Авторизация', () => {
    beforeEach(() => {
        LoginPage.visit();
    })

    it('Успешная авторизация', () => {
        LoginPage.login(config.credentials.user)
        cy.url().should('eq', 'https://try.vikunja.io/')
    })

    it('Нельзя авторизоваться без пароля', () => {
        LoginPage.login({
            username: config.credentials.user.username,
            password: ''
         })
        LoginPage.getPasswordError().contains('Введите пароль')
        cy.url().should('eq', 'https://try.vikunja.io/login')
    })
})