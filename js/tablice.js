//tablice
let zmienna = ['Krystian', 'Ania', 'Adam'];

//wyciagnie elemtu tablicy poprzez podanie numeru indeksu w nawiasie kwadratowym
console.log(zmienna[1]);

//Dodawanie wartosci do tablicy 
zmienna[3] = 'Marcin';
//lub zmienna.push
console.log(zmienna);

zmienna.push('Michal');
console.log(zmienna);
//console.log(zmienne.push('Michal'))

//Dodawanie wartosci na poczatek tablicy
zmienna.unshift('Monika');
console.log(zmienna);

//Usuwanie elementow
//metoda pop() usuwa element z konca tablicy
zmienna.pop();
console.log(zmienna);

//metoda shift() usuwa pierwszy element z tablicy
zmienna.shift();
console.log(zmienna);
//console.log(zmienna.length);
//oddaje numer elementow

//join() - zwraca wszystkie elementy talicy wypisane jako tekst, w nawiasach opcjonalnie mozemy podac spearator, domyslnie ','
console.log(zmienna.join(' '));

//reverse() sortuje tablice - niezaleznie od tego, gdzie zostal
console.log(zmienna.reverse());
console.log(zmienna);

//sort() sortuje tablice - niezaleznie od tego, gdzie zostal wykonany
console.log(zmienna.sort());
console.log(zmienna);
















