/*function pour la bar de progression*/
var widthInitial = 5

console.log(widthInitial)

function ajouter(){
  if(widthInitial < 105){
  document.getElementById('bar2').style.width = widthInitial + '%';
  console.log(widthInitial)
  widthInitial = widthInitial + 5;
  document.getElementById('bar2').innerHTML = widthInitial + '%';
  }
}

function soustraire(){
  if(widthInitial > 0){
  widthInitial = widthInitial - 5
  document.getElementById('bar2').style.width =  widthInitial + '%';
  console.log(widthInitial);
  document.getElementById('bar2').innerHTML = widthInitial + '%';
  }
}
