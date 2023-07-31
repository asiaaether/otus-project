const TasksElements = {
    getList () {
        return cy.get('.p-2')
    },
    getTaskByName (name) {
        this.getList().get('div').contains(name)
    },
    addNewTask (name) {
        cy.get('textarea[class*="add-task"]').type(name)
        cy.click('button[class*="add-task-button"]')
    },
    completeTask (name) {
        this.getTaskByName(name)

    }
}

export default TasksElements;