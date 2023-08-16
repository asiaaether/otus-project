import MenuElement from "../elements/MenuElements"

const MainPage = {
    visit () {
        cy.intercept('https://try.vikunja.io/').as('MainPage')
        cy.visit('https://try.vikunja.io/')
   },
    getMenu () {
        return MenuElement;
    }
}

export default MainPage