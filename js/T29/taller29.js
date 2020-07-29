
function  consulapi(){
    
$.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/charmander",
    success:function (result){
        
        var img=document.createElement('img');
        img.setAttribute('src',result.sprites.front_default);
        document.body.appendChild(img);
        console.log(result);
        
        
                    var ctx = document.getElementById('grafico').getContext('2d');
                    var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [result.stats[0].stat.name, result.stats[1].stat.name, result.stats[2].stat.name, result.stats[3].stat.name, result.stats[4].stat.name, result.stats[5].stat.name],
                        datasets: [{
                            label: result.name,
                            data: [result.stats[0].base_stat, result.stats[1].base_stat, result.stats[2].base_stat,result.stats[3].base_stat, result.stats[4].base_stat, result.stats[5].base_stat],
                            backgroundColor: [
                                'orange',
                                'blue',
                                'greenyellow',
                                'red',
                                'black',
                                'yellow'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
                    
        
    }
})
}


