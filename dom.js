/*
/*
// EXAMINING THE DOCUMENT OBJECT//

1) console.log(document);
2) console.log(document.URL);
3) console.log(document.title);
4) console.log(document.all);

5) // document.title = 'JavaScript DOM';

6) console.log(document.all[18]);
7) console.log(document.all[10]);

8) // document.all[10].textContent = 'Task   Lister';      (Not a way to select any object because if array position changed this method will do its work for some other object)

9) console.log(document.forms);
10) console.log(document.forms[0]);
11) console.log(document.images);

*/

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent ='Task List for Today';
// headerTitle.innerText ='Task List for Tommorrow'; // textContent & innerText is almost the same thing and did same work and the difference is innerText focuses on styling //

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h2>MORE the TASKS MORE the PRODUCTIVITY</h2>';
// header.style.borderBottom = '10px solid #000000';


// GETELEMENTBYCLASSNAME //

/*
var tasks = document.getElementsByClassName ('list-group-item');
console.log(tasks);
console.log(tasks[0]);
console.log(tasks[1]);
console.log(tasks[2]);
console.log(tasks[3]);
tasks[0].textContent = 'Give 3 hours to web development training';
tasks[1].textContent = 'Give 4 hours to Theory of Machine for GATE';
tasks[2].textContent = 'Give 2 hours to technical interview preperation';
tasks[0].style.fontWeight = 'bold';
tasks[0].style.backgroundColor = '#90EE90';

// Gives Error
// items.backgroundColor = '#90ee90';

// To changes every objects background in HTML Collection we have to use loop

for(var i=0; i < tasks.length; i++){
    tasks[i].style.fontWeight = 'bold';
    tasks[i].style.backgroundColor = '#90ee90';
    tasks[i].style.borderBottom = 'solid 2px #000000';
}
*/

/*

// GETELEMENTBYTAGNAME //

var li = document.getElementsByTagName ('li');
console.log(li);
console.log(li[0]);
console.log(li[1]);
console.log(li[2]);
console.log(li[3]);
li[0].textContent = 'Give 3 hours to web development training';
li[1].textContent = 'Give 4 hours to Theory of Machine for GATE';
li[2].textContent = 'Give 2 hours to technical interview preperation';
li[0].style.fontWeight = 'bold';
li[0].style.backgroundColor = '#90EE90';

// Gives Error
// items.backgroundColor = '#90ee90';

// To changes every objects background in HTML Collection we have to use loop

for(var i=0; i < li.length; i++){
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = '#90ee90';
    li[i].style.borderBottom = 'solid 4px #000000';
}


// QUERYSELECTOR // //(it only grabs the 1st one as its preference)//

var header1 = document.querySelector('#main-header');
header1.style.borderBottom = 'solid 10px lightgrey';

var input1 = document.querySelector('input');
input1.value = 'Add Your Tasks......';

var submit1 = document.querySelector('input[type="submit"]');
submit1.value = 'ADD YOUR ENTERED TASK';

var task1 = document.querySelector('.list-group-item');
task1.style.color = '#0000ff';

var lastTask = document.querySelector('.list-group-item:last-child');
lastTask.style.color = '#0000ff';

var thirdTask = document.querySelector('.list-group-item:nth-child(3)');
thirdTask.style.color = '#0000ff';

var fifthTask = document.querySelector('.list-group-item:nth-child(5)');
fifthTask.style.color = '#0000ff';

var seventhTask = document.querySelector('.list-group-item:nth-child(7)');
seventhTask.style.color = '#0000ff';



// QUERYSELECTORALL //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Task Integrator';
titles[1].textContent = 'Task History';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i< odd.length; i++){

odd[i].style.backgroundColor = '#9fe2bf';

}

var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i< even.length; i++){

even[i].style.backgroundColor = '#98fb98';

}

*/

/*

// TRAVERSING THE DOM //

// PARENT NODE PROPERTY //
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// PARENT ELEMENT PROPERTY //
var itemList1 = document.querySelector('#items');
console.log(itemList1.parentElement);
itemList.parentElement.style.backgroundColor = '#F0FFFF';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

// CHILD NODES PROPERTY //
console.log(itemList.childNodes);

// CHILDREN PROPERTY //
console.log(itemList.children);
console.log(itemList.children[0]);
itemList.children[1].style.backgroundColor = '#0BDA51';

// FIRST CHILD PROPERTY //
console.log(itemList.firstChild);

// FIRST ELEMENT CHILD PROPERTY //
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Complete your TOM Chapter 1 Revision';

// LAST CHILD PROPERTY //
console.log(itemList.lastChild);

// LAST ELEMENT CHILD PROPERTY //
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Start your Production Revision';

// NEXT SIBLING, NEXT ELEMENT SIBLING, PREVIOUS SIBLING PROPERTY //
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = '#023020';


// CREATING DOM ELEMENTS //

// ADDING div, class, id.... //
var newDiv = document.createElement('div');

newDiv.className = 'TODO';
newDiv.id = 'task';
newDiv.setAttribute('title', 'Tasks & ToDos');

var newDivText = document.createTextNode('Task Manager');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = '20px';
container.insertBefore(newDiv, h1);


*/


// ADDING EVENTS //

/*
var button = document.getElementById('button').addEventListener('click', function(){
    console.log('Button is Clicked')
});

*/


/*var button1 = document.getElementById('button').addEventListener('click', buttonClicked);

function buttonClicked() {
    console.log(123);
}
*/

/*
var button = document.getElementById('button').addEventListener('click', buttonClicked);

function buttonClicked() {
    document.getElementById('task').textContent = 'ToDo Manager';
    document.querySelector('#main-body').style.backgroundColor = '#BFFEAD';
}
*/

// var button = document.getElementById('button').addEventListener('click', runEvent);

// function buttonClicked(e) {

    /*
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target.classList);
    */
    

    /*
    var output = document.getElementById('output');
    output.innerHTML = '<h4>'+e.target.id+'</h4>';

    console.log(e.type);
    */

    // console.log(e.offsetX);
    // console.log(e.offsetY);

   /*
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

}

   */ 

/*
var button = document.getElementById('button')

// button.addEventListener('click', runEvent);

// button.addEventListener('dblclick', runEvent);

// button.addEventListener('mousedown', runEvent);

// button.addEventListener('mouseup', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
}

*/

// var box = document.getElementById('box')

// box.addEventListener('mouseenter', runEvent);

// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // mouseover and mouseout events will mainly call for inner elements

// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

/*

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);

// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);

// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);

// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e){

    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    // console.log('SELECTED VALUE: '+e.target.value);

    // document.body.style.display = 'none';

    // console.log(e.target.value);

    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // output.innerHTML = '<h3>Mouse X: '+e.offsetX+'</h3> <h3>Mouse Y: '+e.offsetY+'</h3>';

    // box.style.background = "rgb("+e.offsetX+", "+e.offsetY+", 150)";

    // document.body.style.background = "rgb("+e.offsetY+", "+e.offsetX+", 200)";



}

*/


// FINAL PROJECT //

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addTask);
itemList.addEventListener('click', removeTask);
filter.addEventListener('keyup', filterTask);

function addTask(e){
    e.preventDefault();

    var newTask = document.getElementById('task').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newTask));
    var removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm float-right delete';
    removeButton.appendChild(document.createTextNode('X'));
    li.appendChild(removeButton);
    itemList.appendChild(li);
}

function removeTask(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterTask(e){
    e.preventDefault();

    var text = e.target.value.toLowerCase();
    var tasks = itemList.getElementsByTagName('li');
    Array.from(tasks).forEach(function(task){
        var taskName = task.firstChild.textContent;

        if(taskName.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}