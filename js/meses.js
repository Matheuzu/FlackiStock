var meses = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Julho',
'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
var x = 0;
$('#mes').html(meses[x]);

$(document).ready(function(){
    $("#proximo").click(function(){
        x++;
        if(x > 11){
            $('#mes').html(meses[0]);
            x = 0;  
        }else{
            $('#mes').html(meses[x]);
        }
    });
});

$(document).ready(function(){
    $("#antes").click(function(){  
        x--;
        if(x < 0){
            $('#mes').html(meses[meses.length - 1]);
            x = 11;  
        }else{
            $('#mes').html(meses[x]);
        }
    });
});