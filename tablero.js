var contenedor = document.getElementById("contenedor");
document.getElementById("mostrar").style.display="none";
var cont=0;
var verNum;
var numTablero = [];
var numerosJu = [];

dibujoTab();
document.getElementById("botonJ").addEventListener("click", function () {
    play();
    dibujoTab();
    indiNum();
});
function dibujoTab() {
    numTablero = [];
    for (var a = 1; a < 91; a++) {
        numTablero.push(a);
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.id = a;
         
        for (var i = 0; i < numerosJu.length; i++) {
            cont=a;
            if (numerosJu[i] === cont) {
                //console.log("encontrado " + casillero.id + "  y " + numerosJu[b]);
                casillero.style.backgroundColor = "pink";
            }
        }
        casillero.appendChild(document.createTextNode(a));
        contenedor.appendChild(casillero);
        cont++;
    }
}

function play() {
    contenedor.innerHTML = "";
    var serie = genNum(0, 90);
    if ((numerosJu.includes(serie) || numerosJu === []) && numerosJu.length < 91) {
        alert("numero repetido" + serie);
        play();
    } else if (numerosJu.length <91) {
        verNum=serie;
        numerosJu.push(serie);
        alert("Guardado Exitoso",numerosJu[numerosJu.length - 1]);
    } else {
        var marco=document.getElementById("mostrar");
        marco.style.backgroundColor = "pink";
    }
    document.getElementById("verNumero").innerHTML=verNum;
}
function indiNum(){
    document.getElementById("mostrar").style.display="block";
}
function genNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
