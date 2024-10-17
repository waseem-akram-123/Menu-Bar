var options = document.getElementsByClassName ("options");
console.log (options);

var displayBar = document.querySelector ("#display-bar");
var display = document.querySelector ("#display");


for (option of options){
    option.onclick = function (){
        display.innerHTML = this.textContent;
    }
}