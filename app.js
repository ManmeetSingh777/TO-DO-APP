
var theList =[];

var ibox = document.getElementById("input");
const submit = document.getElementById("button");
const list = document.getElementById("todolist");


submit.addEventListener('click',() => {
    if(ibox.value){
        console.log(theList);
    theList.push(ibox.value);
    ibox.value = "";
    display();
    }
})


function display(){
    list.innerHTML = "";
    theList.forEach((ibox,index) => {
        list.innerHTML +=
      "<li>"+ibox+ " <span onclick='remove("+index+")'>X | </span><span onclick='edit("+index+")'>Edit&nbsp;&nbsp;</span></li>";
    }) 
}


function edit(index) {
    var newibox = prompt("Please insert your new value");
    if(newibox){
        theList.splice(index, 1, newibox);
        display();
    }
}


function remove(index) {
    theList.splice(index, 1);
    display();
}







