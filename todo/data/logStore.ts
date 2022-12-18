import { TodoData } from './../models/todoData';
import { OperationType } from './../models/operationType';
import { LogData } from './../models/logData';
import { makeAutoObservable } from 'mobx'

class LogStore {
    logs: LogData[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addLog(operation: OperationType, operationData: TodoData) {
        const logModel = new LogData();
        switch (operation) {
            case OperationType.AddTask: {
                logModel.operationName = 'Добавление задачи';
                break;
            }
            case OperationType.DeleteTask: {
                logModel.operationName = 'Удаление задачи';
                break;
            }
            case OperationType.CompleteTask: {
                logModel.operationName = 'Завершение задачи';
                break;
            }
            default: {
                logModel.operationName = 'Ошибка';
                break;
            }
        }
        logModel.operationDescription = JSON.stringify(operationData);
        logModel.dateTimeString = new Date().toLocaleString()

        this.logs.push(logModel)

    }

}

export default new LogStore()