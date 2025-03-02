const allBtn = document.getElementsByClassName('complete');
const givenTask = document.getElementById('given-task');
const finishTask = document.getElementById('finish-task');
const finishMsg = document.getElementById('finish-msg');
const clearBtn = document.getElementById('clear-btn');
const date = document.getElementById('date');

givenTask.innerText = allBtn.length;
const currentDate = new Date().toDateString();
date.innerHTML = currentDate.split(' ')[0] + '<br>' + currentDate.slice(3);

for (const element of allBtn) {
    element.addEventListener('click', (event) => {
        alert('Board updated successfully');
        if (allBtn.length === 1) {
            alert('Congrats! You have completed all the tasks');
        }
        event.target.classList.remove('complete');
        event.target.setAttribute('disabled', 'true');
        givenTask.innerText = document.getElementsByClassName('complete').length;
        finishTask.innerText = parseInt(finishTask.innerText) + 1;
        
        const taskItemName = event.target.parentElement.parentElement.children[1].innerText 
        newTask(taskItemName);
    });
}

function newTask(taskItemName) {
    const time = new Date().toTimeString().split(' ')[0];
    const hour = parseInt(time.split(':')[0]);
    const justTime = hour >= 12 ? (hour === 12 ? hour : hour - 12) + time.slice(2) + 'pm' : (hour === 0 ? 12 : hour) + time.slice(2) + 'am';

    const newItem = document.createElement('p');
    newItem.classList.add('task');
    newItem.innerHTML = `You have completed the task <span class='font-semibold'>${taskItemName}</span> at <span class='font-semibold'>${justTime}</span>`;
    
    finishMsg.append(newItem); 
}


clearBtn.addEventListener('click', () => {
    finishMsg.replaceChildren();
});

document.getElementById('color-btn').addEventListener('click', () => {
    const randomColor = [];
    for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * 256);
        randomColor.push(random);
    }
    document.querySelector('body').style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
});
document.getElementById("blog-section").addEventListener('click',()=>{
    document.location.href='./quastion.html'
})