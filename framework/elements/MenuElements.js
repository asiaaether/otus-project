const MenuElement = {
    getRoot () {
        return cy.get('.menu-list')
    },
    getItemByName (name) {
        this.getRoot().get('a').contains(name)
    },
    getActiveItem () {
        this.getRoot().get('.router-link-exact-active')
    }
}

export default MenuElement;