var contenedores= document.getElementById("contenedor");

var numTablero = [];
var nJugados=[]
var valor = 1;
dibujar();
document.getElementById("boton")
    .addEventListener("click", function() {
jugar();
dibujar()
    });

function dibujar(){
    numTablero = [];
    for (var i = 1; i < 91; i++) {
        numTablero.push(i);
        var celda= document.createElement('div');
        celda.className = 'celdas';
        celda.id =i;
    for (var k = 0; k < nJugados.length; k++) {
           
          
    if (nJugados[k] === celda.id) {
         console.log("encontrado " + celda.id+ "  y " + nJugados[k]);
               
              
    }else{
            
        celda.style.backgroundColor = "#eaea06";
            }

        }
        celda.appendChild(document.createTextNode(i));
        contenedores.appendChild(celda);
        
    }
}

function jugar(){
    contenedores.innerHTML = "";
    var num=generarNumero(0, 90);
    if ((nJugados.includes(num)|| nJugados === [])&& nJugados.length < 90 ) {
     
        jugar();
    } else if(nJugados.length<90){
        nJugados.push(num);
       
   
        console.log(nJugados[nJugados.length - 1]);
    }else{
        alert("Todos los numeros se han jugado");
    }
}
function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}