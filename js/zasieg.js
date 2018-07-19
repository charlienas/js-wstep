'use strict';

//zmienna globalna dostepna jest z kazdego miejsca w skrypcie, definiowana poza jakimkolwiek blokiem kodu
let zmiennaGlobalna = 10;

//zmienna lokalna zdefiniowana jest w bloku kodu (petla, instrukcja warunkowa etc.) i dostepna jest tylko w tym bloku
function zalogujDoKonsoli() {
    let zmiennaLokalna = 5;
    console.log(zmiennaLokalna);
    if (1 > 0) {
        let zmienna3 = 100;
        zmiennaLokalna = 10;
        zmiennaGlobalna = 15;
        
    }
    console.log(zmiennaLokalna);
    //console.log(zmienna3);
}

zalogujDoKonsoli();
//console.log(zmiennaGlobalna);
//console.log(zmiennaLokalna);

let x = null;
console.log(x);






















