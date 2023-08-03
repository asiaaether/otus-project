import config from '../../framework/config/config.js'
import LoginPage from '../../framework/pages/LoginPage.js'
import ProjectPage from '../../framework/pages/ProjectPage.js'
import ProjectElements from '../../framework/elements/ProjectElements.js'

describe('Проекты', () => {
    let projectName
    beforeEach(() => {
        LoginPage.visit()
        LoginPage.login(config.credentials.user)
        ProjectPage.visit()
        cy.wait(5000)

        projectName = Math.random().toString()
    })

    it('Добавление проекта', () => {
        ProjectElements.addNewProject(projectName)
        ProjectPage.visit()
        ProjectElements.getList().contains(projectName)
    })

    it('Удаление проекта', () => {
        ProjectElements.addNewProject(projectName)
        ProjectPage.visit()
        ProjectElements.deleteProjectByName(projectName)
        ProjectPage.visit()
        cy.wait(5000)
        ProjectElements.getList().contains(projectName).should('not.exist')
    })

})