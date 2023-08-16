const ProjectPage = {
    visit () {
        cy.intercept('https://try.vikunja.io/projects/').as('ProjectPage')
        cy.visit('https://try.vikunja.io/projects/')
   }
}

export default ProjectPage