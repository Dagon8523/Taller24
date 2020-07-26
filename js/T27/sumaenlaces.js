
window.onload = function(){
    var parrafo = document.getElementsByTagName("p");
    var totalenlaces=0;
    var tempresult=0;
    var p=1;
    var resultanterior=0;
    var resultactual=0;
    var totalfinal=0;

    alert("Taller 27 Funciones Dom");
        for(let i=0;i<=parrafo.length;i++){
            var tempoparrafo = parrafo[i];
            var enlaces = tempoparrafo.getElementsByTagName("a");
            resultanterior=parseInt(tempresult);
            resultactual=parseInt(enlaces.length);
            totalfinal = resultanterior+resultactual;
            var temp_enlaces = enlaces;
            alert("contando enlaces del parrafo "+p); 
            totalenlaces=parseInt(temp_enlaces.length);
            tempresult= totalenlaces+tempresult;  
            alert(" Parrafo "+p+" suma de enlaces hasta parrafo actual "+totalfinal);
            p++    
        }
    }
       
        
    



