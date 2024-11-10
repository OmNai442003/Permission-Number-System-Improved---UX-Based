const LOCALSTORAGE = {
    taskStorageKey: "task",
};


export function recordTask(taskObj){
    let tasks = getTasks();

    tasks.push(taskObj);
    localStorage.setItem(LOCALSTORAGE.taskStorageKey, JSON.stringify(tasks));
}

export function getTasks(){
    let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE.taskStorageKey));
    if(!tasks) tasks = [];

    return tasks;
}