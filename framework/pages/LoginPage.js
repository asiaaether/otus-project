const LoginPage = {
    visit () {
        cy.visit('https://try.vikunja.io/login')
        cy.contains('Войти')
    },
    fillUsername (username) {
        cy.get('#username').type(username)
    },
    fillPassword (password) {
        cy.get('#password').type(password)
    },
    submitForm () {
        cy.get('button').contains('Войти').click()
    },
    getPasswordError () {
        return cy.get('.password-field').next('p')
    },
    login ({ username, password }) {
        cy.intercept('GET', 'api/v1/user').as('fetchUser')
        this.fillUsername(username)
        this.fillPassword(password)
        this.submitForm()
        cy.wait('@fetchUser')
    }
   }

export default LoginPage