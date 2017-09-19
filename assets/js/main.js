var vacios= [];
var vaciosLength = document.getElementsByClassName('vacio').length;
var tabla = document.getElementById('tabla');
var num1 = [];
var num1Length = document.getElementsByClassName('num1').length;
var num2 = [];
var num2Length = document.getElementsByClassName('num2').length;
var num3 = [];
var num3Length = document.getElementsByClassName('num3').length;

function noClick(){
  event.stopPropagation();
}
tabla.addEventListener("click", noClick);

for(var i = 0; i< vaciosLength; i++){
  vacios[i]= document.getElementsByClassName('vacio')[i];
}
for(var i = 0; i< vaciosLength; i++){
  vacios[i].addEventListener("click",espacioVacio);
}
function espacioVacio(){

    this.style.backgroundColor="white";
}

  var bomba = document.getElementsByClassName('bomba');
  for(var i = 0; i< bomba.length; i++){
    bomba[i].addEventListener("click", bombas);
  }
  function bombas(){

    for(var i = 0; i< bomba.length; i++){
      console.log(i);
      bomba[i].setAttribute("value","💣");
      bomba[i].style.backgroundColor="red";

    }
    setTimeout(function(){alert("Perdiste");},500);
    deshabilitar();
  }

  var botonReinicio = document.getElementById('reiniciar');
  botonReinicio.addEventListener("click", reiniciar);
  function reiniciar(e){
    e.stopPropagation();
    location.reload();
  }

  document.addEventListener('click', continuar);
  function continuar(){
    alert('Sigue jugango');

  }

  for(var i = 0; i< num3Length; i++){
    num3[i]= document.getElementsByClassName('num3')[i];
  }
  for(var i = 0; i< num3Length; i++){
    num3[i].addEventListener("click",numero3);
  }
  function numero3(){
    this.setAttribute("value", "3");

  }
  for(var i = 0; i< num2Length; i++){
    num2[i]= document.getElementsByClassName('num2')[i];
  }
  for(var i = 0; i< num2Length; i++){
    num2[i].addEventListener("click",numero2);
  }
  function numero2(){
    this.setAttribute("value", "2");

  }

  for(var i = 0; i< num1Length; i++){
    num1[i]= document.getElementsByClassName('num1')[i];
  }
  for(var i = 0; i< num1Length; i++){
    num1[i].addEventListener("click",numero1);
  }
  function numero1(){
    this.setAttribute("value", "1");
  }

function deshabilitar(){
     var inputs = document.getElementsByTagName('input');
     for(var i = 0; i< inputs.length; i++){
       inputs[i].disabled = true;
     }
}