var area = document.getElementById('insert-twits');
var btn = document.getElementById('save');
var lista = document.getElementById('container-twits');
var count = document.getElementById('count');

/*Funciónque imprime en una lista los twit ingresados*/
btn.addEventListener('click', function(event){
  area.focus();
  
  if(area.value) { 
    var li = document.createElement('li');
    var txt = document.createElement('p');

    txt.textContent = area.value;
    
    li.appendChild(txt);
    lista.appendChild(li);
    
    //Limpia la Caja de Texto
    area.value = ''; 
  }
  //event.target.disabled = false;  
});





