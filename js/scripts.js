window.onload = function(){
	consultarTareas();
	
	$("#Enviar").on("click", function(){
		if(!$("#Tarea").val()){
			alert("Ingrese la descripción de la tarea.");
			$("#Tarea").focus();
		}
		else{
			agregarTarea($("#Tarea").val());
			$("#Tarea").val("");
		}
	});
	
	function agregarTarea(tarea){
		var listadoTareas = [];
		if(localStorage.getItem("Tareas") != null){
			listadoTareas = JSON.parse(localStorage.getItem("Tareas"));
		}
		listadoTareas.push(tarea);
		localStorage.setItem("Tareas", JSON.stringify(listadoTareas));
		crearFila(tarea);
	}
	
	function consultarTareas(){
		var listadoTareas = JSON.parse(localStorage.getItem("Tareas"));
		if(listadoTareas != null){
			listadoTareas.forEach(element => {
				crearFila(element);
			});
		}
	}
	
	function crearFila(texto){
		let divTarea = document.createElement("div");
		let textTarea = document.createTextNode(texto); 
		divTarea.appendChild(textTarea);
		document.getElementById("Listado").appendChild(divTarea);
	}
}