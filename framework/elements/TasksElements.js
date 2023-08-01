const TasksElements = {
    getList () {
        return cy.get('div[class="task loader-container"]')
    },
    getTaskByName (name) {
       return this.getList().get('span').contains(name)
    },
    addNewProject (name) {
        cy.get('a[href="/projects"]').click()
        cy.get('a[href="/projects/new"]').click()
        cy.get('input[name="projectTitle"]').type(name)
        cy.get('button.is-primary').click()
    },
    addNewTask (name) {
        cy.get('textarea[class*="add-task"]').type(name)
        cy.get('button[class*="add-task-button"]').click()
    },
    completeTask (name) {
        this.getTaskByName(name).parent().prev().click()

    }
}

export default TasksElements;