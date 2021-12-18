// -------------------- DOM - START --------------------
const inputDOM = document.querySelector(".inputArea");
const submitButtonDOM = document.querySelector(".submitButton");
const ulDOM = document.querySelector(".listUl");
let liDOM1 = document.querySelector(".listItemLi1");
let liDOM2 = document.querySelector(".listItemLi2");
let removeButtonDOM = document.querySelector(".closeButton");
const toastFailDOM = document.querySelector(".failToast");
const toastSuccessDOM = document.querySelector(".successToast");
// -------------------- DOM - END --------------------

// ********** LOCAL STORAGE FUNCTIONS - START **********

let startLocalStorage = () => {

    let isLocalStorage = JSON.parse(localStorage.getItem('toDo'));
    
    if (!isLocalStorage) {
        isLocalStorage = [];
        localStorage.setItem('toDo',JSON.stringify(isLocalStorage));
    }
    else {
        // todo ları sayfaya yükle
        for (let i = 0; i < isLocalStorage.length; i++) {
            if (ulDOM.childElementCount === 0) {
                let firstLi = document.createElement('li');
                firstLi.classList.add("listItemLi1", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
                firstLi.innerHTML = `
                    <div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${isLocalStorage[i].toDo}</span></div>
                    <button type="button" class="btn-close closeButton " aria-label="Close">
                `;
                if (isLocalStorage[i].isChecked){
                    isCheckedEvent(firstLi,'liDOM1');
                    ulDOM.appendChild(firstLi);
                }
                else{
                    ulDOM.appendChild(firstLi);
                };
                
            }
            else if (ulDOM.childElementCount % 2 === 0) {
                let firstLi = document.createElement('li');
                firstLi.classList.add("listItemLi1", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
                firstLi.innerHTML = `
                    <div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${isLocalStorage[i].toDo}</span></div>
                    <button type="button" class="btn-close closeButton " aria-label="Close">
                `;
                if (isLocalStorage[i].isChecked){
                    isCheckedEvent(firstLi,'liDOM1');
                    ulDOM.appendChild(firstLi);
                }
                else{
                    ulDOM.appendChild(firstLi);
                };
            }
            else {
                let secondLi = document.createElement('li');
                secondLi.classList.add("listItemLi2", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
                secondLi.innerHTML = `
                    <div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${isLocalStorage[i].toDo}</span></div>
                    <button type="button" class="btn-close closeButton " aria-label="Close">
                `;
                if (isLocalStorage[i].isChecked){
                    isCheckedEvent(secondLi,'liDOM2');
                    ulDOM.appendChild(secondLi);
                }
                else{
                    ulDOM.appendChild(secondLi);
                };
            };
        };
    };
    liDOM1 = document.querySelector(".listItemLi1");
    liDOM2 = document.querySelector(".listItemLi2");
    removeButtonDOM = document.querySelector(".closeButton");
};

startLocalStorage();



let getTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('toDo'));
}
let setTodosToLocalStorage = (obj) => {
    localStorage.setItem('toDo', JSON.stringify(obj));
}
let addTodoToLocalStorage = (obj) => {
    todos = getTodosFromLocalStorage();
    todos.push(obj);
    setTodosToLocalStorage(todos);
}

let isClicked = (isClicked) => {
    let obj = getTodosFromLocalStorage();

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].toDo === isClicked){
            obj[i].isChecked = !obj[i].isChecked;
        }
    }

    setTodosToLocalStorage(obj);
}

let deleteTodoFromLocalStorage = (todoName) => {
    let todos = getTodosFromLocalStorage();

    for(let i = 0; i < todos.length; i++){
        if (todos[i].toDo == todoName) {
            todos.splice(i,1);
        }
    }
    setTodosToLocalStorage(todos);


}

// ********** LOCAL STORAGE FUNCTIONS - END **********



// -------------------- TOAST OPTIONS - START --------------------
var option = {
            
    animation : true,
    delay : 3000
};
// -------------------- TOAST OPTIONS - END --------------------





// -------------------- EVENTS - START --------------------
submitButtonDOM.addEventListener('click',clickEvent);
ulDOM.addEventListener('click', clickEvent);
// -------------------- EVENTS - END --------------------





// -------------------- FUNTIONS - START --------------------
    // ********** EVENT FUNCTIONS - START **********
function clickEvent (event) {
    event.preventDefault();


    // SUBMIT BUTTON CLICK
    if(event.target.className === submitButtonDOM.className) {
        let inputValue = inputDOM.value.trim();
        if (inputValue != "") {
            var toastElement = new bootstrap.Toast(toastSuccessDOM, option);
            toastElement.show();
            if (ulDOM.childElementCount === 0) {
                let firstLi = document.createElement('li');
                firstLi.classList.add("listItemLi1", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
                firstLi.innerHTML = `
                    <div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${inputValue}</span></div>
                    <button type="button" class="btn-close closeButton " aria-label="Close">
                `;
                ulDOM.appendChild(firstLi);
                inputDOM.value = "";
                liDOM1 = document.querySelector(".listItemLi1");
                removeButtonDOM = document.querySelector(".closeButton");

                // -------------------- LOCAL STORAGE - START --------------------
                
                const toDo = {
                    toDo: inputValue,
                    isChecked: false,
                };

                addTodoToLocalStorage(toDo);
            
                
                // -------------------- LOCAL STORAGE - END --------------------

            }
            else if (ulDOM.childElementCount % 2 === 0) {
                let firstLi = document.createElement('li');
                firstLi.classList.add("listItemLi1", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
                firstLi.innerHTML = `
                    <div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${inputValue}</span></div>
                    <button type="button" class="btn-close closeButton " aria-label="Close">
                `;""
                ulDOM.appendChild(firstLi);
                inputDOM.value = "";
                liDOM1 = document.querySelector(".listItemLi1");
                removeButtonDOM = document.querySelector(".closeButton");

                // -------------------- LOCAL STORAGE - START --------------------
                const toDo = {
                    toDo: inputValue,
                    isChecked: false,
                };

                addTodoToLocalStorage(toDo);
                
                
                // -------------------- LOCAL STORAGE - END --------------------
            }
            else {
                let secondLi = document.createElement('li');
                secondLi.classList.add("listItemLi2", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
                secondLi.innerHTML = `
                    <div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${inputValue}</span></div>
                    <button type="button" class="btn-close closeButton " aria-label="Close">
                `;
                ulDOM.appendChild(secondLi);
                inputDOM.value = "";
                liDOM2 = document.querySelector(".listItemLi2");
                removeButtonDOM = document.querySelector(".closeButton");

                // -------------------- LOCAL STORAGE - START --------------------
                
                const toDo = {
                    toDo: inputValue,
                    isChecked: false,
                };

                addTodoToLocalStorage(toDo);
                
                
                // -------------------- LOCAL STORAGE - END --------------------
            };

            
        }
        else {
            var toastElement = new bootstrap.Toast(toastFailDOM, option);
            toastElement.show();
            console.log(ulDOM.childElementCount);
        };
    };
    
    
    // li DOM 1 CLICK
    if (liDOM1) {
        if(event.target.className === liDOM1.className) {
            isCheckedEvent(event.target,'liDOM1');
            let clickedTarget = event.target.firstElementChild.lastElementChild.innerHTML;
            isClicked(clickedTarget);
        };
    };    
    
    
    // li DOM 2 CLICK
    if (liDOM2) {
        if(event.target.className === liDOM2.className) {
            isCheckedEvent(event.target,'liDOM2');
            let clickedTarget = event.target.firstElementChild.lastElementChild.innerHTML;
            isClicked(clickedTarget);
        };
    };

    // CLOSED (REMOVE) BUTTON IN LIST CLICK
    if (removeButtonDOM) {
        if(event.target.className === removeButtonDOM.className) {       
            let todoName = event.target.previousElementSibling.lastElementChild.innerHTML;
            deleteTodoFromLocalStorage(todoName);
            event.target.parentElement.remove();
        };
    };
};


function isCheckedEvent (event,liDOM) {
    if (liDOM === 'liDOM1'){
        if (event.style.backgroundColor !== "rgb(36, 101, 115)") {
            event.style.background = "rgb(36, 101, 115)";
            event.style.textDecoration = "line-through";
            event.style.color = "white";
            event.firstElementChild.firstElementChild.style.opacity = 1;
        }
        else if (event.style.backgroundColor == "rgb(36, 101, 115)") {
            event.style.backgroundColor = null;
            event.style.textDecoration = null;
            event.style.color = null;
            event.firstElementChild.firstElementChild.style.opacity = null;
        };
    }
    else {
        if (event.style.backgroundColor !== "rgb(36, 101, 115)") {
            event.style.background = "rgb(36, 101, 115)";
            event.style.textDecoration = "line-through";
            event.style.color = "white";
            event.firstElementChild.firstElementChild.style.opacity = 1;
        }
        else if (event.style.backgroundColor == "rgb(36, 101, 115)") {
            event.style.backgroundColor = null;
            event.style.textDecoration = null;
            event.style.color = null;
            event.firstElementChild.firstElementChild.style.opacity = null;
        };
    };
};
    // ********** EVENT FUNCTIONS - END **********
// -------------------- FUNTIONS - END --------------------