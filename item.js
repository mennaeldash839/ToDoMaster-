document.addEventListener("DOMContentLoaded", function() {
    const tasks = ["study course", "go to supermarket", "make launch", "play with my brother"];

    const taskList = document.querySelector('#taskList');
    const taskCount = document.querySelector('#taskCount');
    const searchTaskButton = document.querySelector('#searchTask');
    const taskNumberInput = document.querySelector('#taskNumber');
    const searchResult = document.querySelector('#searchResult');

    function displayTasks() {
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${task}`;
            taskList.appendChild(listItem);
        });

       
        taskCount.textContent = `total tasks: ${tasks.length}`;
    }
    function searchTask() {
        const taskNumber = parseInt(taskNumberInput.value);
        
        if (taskNumber > 0 && taskNumber <= tasks.length) {
            searchResult.textContent = `task is ${taskNumber}: ${tasks[taskNumber - 1]}`;
        } else {
            searchResult.textContent = "invalid";
        }
    }

    searchTaskButton.addEventListener('click', searchTask);

 
    displayTasks();
});
