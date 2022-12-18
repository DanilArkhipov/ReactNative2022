import { makeAutoObservable } from 'mobx'
import { TodoData } from '../models/todoData'

class TaskStore {
    tasks: TodoData[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addNewTask(task: TodoData) {
        this.tasks.push(task)
    }

    deleteTask(task: TodoData) {
        this.tasks = this.tasks.filter(storedTask => storedTask !== task)
    }

    completeTask(task: TodoData) {
        this.tasks = this.tasks.map(storedTask => (storedTask === task ? { ...storedTask, isCompleted: true } : storedTask))
    }

}

export default new TaskStore()