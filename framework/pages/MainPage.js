import MenuElement from "../elements/MenuElement"

const MainPage = {
    visit () {
        cy.visit('https://try.vikunja.io/')
   },
    getMenu () {
        return MenuElement;
    }
}