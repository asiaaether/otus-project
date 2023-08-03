const ProjectElements = {

    getList () {
        return cy.get('.project-grid')
    },
    getProjectkByName (name) {
       return this.getList().get('.project-title').contains(name)
    },
    addNewProject (name) {
        cy.get('a[href="/projects/new"]').click()
        cy.get('input[name="projectTitle"]').type(name)
        cy.get('button.is-primary').click()
    },
    deleteProjectByName (name) {
        this.getProjectkByName(name).next().click({force: true})
        this.deleteCurrentProject()
    },
    deleteCurrentProject () {
        cy.get('.project-title-dropdown').click()
        cy.contains('Delete').click()
        cy.contains('Do it!').click()
    }
}

export default ProjectElements;