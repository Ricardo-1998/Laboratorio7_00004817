//E1
var container; 
//E2
container = document.getElementById("c1");
//E3
container.innerText="Hola mundo";
//E4
container.style.backgroundColor= "#000000";
//E5
container.style.color = "#1cb723";
//E6
container.style.height = "200px";
container.style.width = "200px";
//E7
container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

//--------------------------------------------------------

//E1
var containers = document.getElementsByClassName("c2");


//E2


for(i = 0; i<containers.length; i++){
    containers[i].style.backgroundColor = "#009999";
}
//E3
for(i=0; i<containers.length; i++){
    containers[i].innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

}


//--------------------------------------------------------

//E1
var boton = document.getElementById("btn-click");

//E2
boton.onclick = function(evt){
    alert("Hola mundo");
}

//E3
var btnCopy = document.getElementById("btnCopy");

//E3
btnCopy.onclick = function(evt)
{
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}