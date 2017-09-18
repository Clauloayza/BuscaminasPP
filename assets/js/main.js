function fisrtTable(){
	for(var i = 0; i < 7; i++){
		for(var j = 0; j < 7; j++){
			var tablero = document.createElement("div");
			div.id = i + "" + j;
			div.addEventListener("click", number, true);
			bombMinas.appendChild(div);
		}
	}
}