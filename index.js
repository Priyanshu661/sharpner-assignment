let form = document.querySelector(".form");
let data=document.getElementById("data")
form.addEventListener("submit", function (e) {
  e.preventDefault();
 const amount = document.getElementById("amount").value;
 const description = document.getElementById("description").value;
 const category = document.getElementById("category").value;
const data={
    amount,description,category
}

let expenses = JSON.parse(localStorage.getItem("data")) || [];

expenses.push(data)
 localStorage.setItem("data",JSON.stringify(expenses));
showData();

});

 var expenses = JSON.parse(localStorage.getItem("data")) || [];
 function showData(){   data.innerHTML="";

 var expenses = JSON.parse(localStorage.getItem("data")) || [];

expenses.map((expense,index)=>{
   
 const listItem = document.createElement("li");
    let delButton = document.createElement("button");
    let editButton = document.createElement("button");
    delButton.className = "delete-button";
    delButton.className = "edit-button";
    delButton.appendChild(document.createTextNode("delete"));
    editButton.appendChild(document.createTextNode("edit"));
   listItem.textContent = ` Amount: ${
     expense.amount
   }, Description: ${expense.description}, Category: ${expense.category}`;
   data.appendChild(listItem);
   data.appendChild(delButton);
   data.appendChild(editButton);
   delButton.addEventListener("click", ()=>
deleteEle(index));
   editButton.addEventListener("click", () => editEle(index));
})
}
showData();
function deleteEle(index){
const data=document.querySelector(".delete-button")
 expenses.splice(index, 1);


 localStorage.setItem("data", JSON.stringify(expenses));
 showData();
}


function editEle(index){
    const item=expenses[index];
    
document.getElementById("amount").value=item.amount
document.getElementById("description").value=item.description;

document.getElementById("category").value=item.category;


expenses.splice(index, 1);
 localStorage.setItem("data", JSON.stringify(expenses));
 showData();
}






