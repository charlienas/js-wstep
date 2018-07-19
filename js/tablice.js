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
