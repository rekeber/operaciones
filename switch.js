function operaciones(){
	var primernumero, segundonumero, resultado, presiona;
	primernumero=document.getElementById('primernumero').value;
	segundonumero=document.getElementById('segundonumero').value;
	presiona=document.getElementById('presiona').value;
	

	if(resultado>=12){
		document.getElementById('respuesta2').innerHTML="Aprobaste";
	}else{
		document.getElementById('respuesta2').innerHTML="Reprobaste";
	}

	switch(presiona){
		case "1": 
			resultado=parseInt(primernumero)+parseInt(segundonumero);
		break;

		case "2": 
			resultado=parseInt(primernumero)-parseInt(segundonumero);
		break;

		case "3": 
			resultado=parseInt(primernumero)*parseInt(segundonumero);
		break;

		case "4": 
			resultado=parseInt(primernumero)/parseInt(segundonumero);
		break;
	}
	
	document.getElementById('respuesta').innerHTML=resultado;
}