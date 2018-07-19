//function wypiszDoKonsli(numer1, numer2) {
//    console.log('123');
//    
//}
//
//wypiszDoKonsli(3, 5);


//wyrazenie funkcyjne 
const wpiszDoKonsoli = function () {
    console.log('123');
}

wpiszDoKonsoli();



//funkcje parametrowe
function dodawanie(parametr1, parametr2) {
    // zwracanie wartosci - return, pozwalana wykorzystanie wartosci w pozniejszym miejscu w skrypcie.
    return parametr1 + parametr2;
}

// jezeli chcemy zobaczyc wartosc zwrocona, to albo cala funkcje opinamy w console.log(), albo console.log() umieszczamy zaraz przred return we wnetrzu funkcji
console.log(dodawanie(1, 2));


//funkcje strzalkowe
const dodawanie2 = (parametr1, parametr2) => {
//    console.log(parametr1 + parametr2);
    return parametr1 + parametr2;
}

console.log(dodawanie2(1, 2));




















