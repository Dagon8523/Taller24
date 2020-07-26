
var totalenlaces=0;
var tempresult=0;
var resultanterior=0;
var resultactual=0;
var totalfinal=0;

var parrafo = document.getElementsByTagName("p");


function sumarenlaces(){
    
    
        for(let i=0;i<parrafo.length;i++){
            var tempoparrafo = parrafo[i];
            var enlaces = tempoparrafo.getElementsByTagName("a");
            resultanterior=parseInt(tempresult);
            resultactual=parseInt(enlaces.length);
            totalfinal = resultanterior+resultactual;
            var temp_enlaces = enlaces;
            totalenlaces=parseInt(temp_enlaces.length);
            tempresult= totalenlaces+tempresult; 
            alert("Enlaces encontrados :  "+totalfinal);
        }
}

function accederenlace(){

    var obt_parrafo=parrafo[parrafo.length-1];
    var obt_enlaces=obt_parrafo.getElementsByTagName("a");
    var penultimo_enlace=obt_enlaces[obt_enlaces.length-2];
    alert("El penultimo enlace es "+ penultimo_enlace);   
   
}

function numeroenlacesprueba(){
    var enlaces_prueba=0;
    for(let i=0;i<=parrafo.length;i++){
        var obtenerparrafo = parrafo[i];
        var enlaces = obtenerparrafo.getElementsByTagName("a");
        for(let i=0;i<=enlaces.length-1;i++){
            var obtener_enlace=[];
            obtener_enlace=enlaces[i];
         
            if(enlaces[i]=="http://prueba/"){
               
                enlaces_prueba++ 
                
            } 
        }
        alert("Acumulado de enlaces a http://prueba por cada parrrafo : "+ enlaces_prueba)
      
    }
    
}

function enlacesparrafo3(){
    
    for(let i=2;i==2;i++){
        var obtenerparrafo = parrafo[i];
        var enlaces = obtenerparrafo.getElementsByTagName("a");
        var cantidadenlaces=enlaces.length;

       
        alert("Total de enlaces en el tercer parrafo  son : "+ cantidadenlaces );
      
    }

}

