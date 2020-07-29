
function  consulapi(){
    
$.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/charmander",
    success:function (result){
        document.writeln('El nombre del pokemon es '+result.name);
        document.writeln('El peso del pokemon es'+result.weight);
        var img=document.createElement('img');
        img.setAttribute('src',result.sprites.front_default);
        document.body.appendChild(img);
        console.log(result);
       
        
    }
})
}


