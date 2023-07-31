import MenuElement from "../elements/MenuElements"

const MainPage = {
    visit () {
        cy.visit('https://try.vikunja.io/')
   },
    getMenu () {
        return MenuElement;
    }
}

export default MainPage