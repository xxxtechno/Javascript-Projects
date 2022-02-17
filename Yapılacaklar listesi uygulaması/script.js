const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}

showTasks(); 

addBtn.onclick = ()=>{
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  listArray.push(userEnteredValue); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li class="toodoo">${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; 
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}

deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}

function deleteAl() {
	    listArray = []; //empty the array
		localStorage.setItem("New Todo", JSON.stringify(listArray)); 
		showTasks(); 
}

let add = document.getElementsByClassName(".add")
//document.onkeypress = add;
document.addEventListener('keypress', function(event){
	
				  let add = document.getElementsByClassName(".add");
				  let userEnteredValue = inputBox.value;
				  let deleteAll = document.getElementsByClassName(".deleteAll");
				  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
				  const deleteAllBtn = document.querySelector(".footer button");
				  let toodoo = document.querySelector(".todoList li");	 
				  
				  
				if(userEnteredValue.trim() != 0){ 
					    addBtn.classList.add("active");
			}else{
				return;
			}
	if (event.which == 13) {
			let userEnteredValue = inputBox.value; 
			let getLocalStorageData = localStorage.getItem("New Todo");
			if(getLocalStorageData == null){
				listArray = []; 
			}else{
				listArray = JSON.parse(getLocalStorageData);  
			}
			listArray.push(userEnteredValue); 
			localStorage.setItem("New Todo", JSON.stringify(listArray)); 
			showTasks(); 
			addBtn.classList.remove("active"); 
	} 
	
});

	


