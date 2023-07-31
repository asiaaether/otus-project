import config from '../../framework/config/config.js'
import LoginPage from '../../framework/pages/LoginPage.js'
import MainPage from '../../framework/pages/MainPage.js'
import MenuElement from '../../framework/elements/MenuElements.js'
import TasksElements from '../../framework/elements/TasksElements.js'

describe('Авторизация', () => {
    let task
    beforeEach(() => {
        LoginPage.visit()
        LoginPage.login(config.credentials.user)
        MainPage.visit()
        cy.wait(5000)

        task = Math.random().toString()
    })

    it('Проверка меню', () => {
        MainPage.getMenu().getActiveItem().contains('Overview')
    })

    it('Добавление задачи', () => {
        TasksElements.addNewTask(task)
        TasksElements.getList().contains(task)
    })

    it.only('Завершение задачи', () => {
        console.log("CONSOLE", TasksElements.getList())
    })
})