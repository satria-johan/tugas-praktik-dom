function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;
    
    if (taskText === '') {
        alert('Tidak boleh kosong!');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = taskText + '<span class="delete" onclick="deleteTask(this)"> hapus</span>';
    
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function deleteTask(element) {
   element.parentElement.remove();
}


    