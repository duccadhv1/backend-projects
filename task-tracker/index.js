const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

const args = process.argv.slice(2);

const ACTIONS = {
    ADD: 'add',
    UPDATE: 'update',
    DELETE: 'delete',
    UPDATE: 'update',
    MARK_IN_PROGRESS: 'mark-in-porogress',
    MARK_IN_DONE: 'mark-done',
    LIST: 'list',
}

const STATUS = {
    DONE: 'done',
    TODO: 'todo',
    IN_PROGRESS: 'in-progress'
}

function readTask() {
    if(fs.existsSync(filePath)){
        const list = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(list);
    }
    return []
}

function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null,4), 'utf-8');
}

const tasks = readTask()
console.log('tasks', tasks)
writeTasks({
    id: 1,
    description: 'this is first task',
    status: STATUS.TODO,
    createdAt: new Date()
})

