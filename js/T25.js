let numerofinal = prompt('digite numero final');

function ParImpar(numerofinal){
  
    let i;
  for(i=0;i<=numerofinal;i++)
     if(i % 2 == 0){
         alert("El numero "+i+" es par");
     }else if(i % 2 > 0){
        alert("El numero "+i+" es impar");
     }
     
}
ParImpar(numerofinal)