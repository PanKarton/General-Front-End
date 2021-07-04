// Wyswietla wszystkie node'y
// console.log($('*'));
// Wyswietla wszystkie p
// console.log($('p'));
// Wyswietla ilosc p w obiekcie JQ
// console.log($('p').length);
// Wyswietla cały TEKST ze wszystkich node'ów na raz
// console.log($('p').text());
// Podmienia tekst wszystkich p na to co w nawiasach
// console.log($('p').text("xD"));
// html() puste w srodku pobiera WSZYSTKO między znacznikami danych elementów
// console.log($('p').html());
// Tworzy nowy element 
// $('p').html('<div class="xd"></div>');



// TWORZENIE ELEMENTÓW


// Tworzy zmiennądo której przypisuje nowy element jQuery
const $var = $('<div class="red"></div>');

// Wez obiekty p i dodaj przed nimi obiekt w zmiennej $var
// $('p').before($var);
// Wez obiekty p i dodaj po nimi obiekt w zmiennej $var
// $('p').after($var);
// Wez obiekty p i dodaj na ich początku obiekt w zmiennej $var
// $('p').prepend($var);
// Wez obiekty p i dodaj na ich koncu obiekt w zmiennej $var
// $('p').append($var);
// Wez obiekt ze zmiennej $var i wcisnij go na początku obiektow p
// $($var).prependTo('p');
// Wez obiekt ze zmiennej $var i wcisnij go na koncu obiektow p
// $($var).appendTo('p');



// metoda attr() zwraca nam zawartosc atrybutu jaki damy w argumencie funkcji przy jednym argumencie

// $('div.item1').attr('class');

// var divClass = $('div.item1').attr("class");
// console.log(divClass);



// Metoda attr(x, y) nadpisuje zawartosc atrybutu X podstawiając zawartosc Y

$('div.item1').attr("id", "biełyjerozy");
// Wyszukujemy obiekt div#biełyjerozy i wypisuemy zawartosc jego atrybutu class
// console.log($('div#biełyjerozy').attr("class"));
// Nawiasy kwadratowe to selektor customowego atrybutu, class ma kropke, a id ma hash

// Wyświetlamy id, czyscimy id, wyswietlamy brak id
// console.log($('[data-idUser]').attr("id"));
// $('[data-idUser]').attr("id", "");
// console.log($('[data-idUser]').attr("id"));

// removeAttr(x) usuwa atrybut X z obiektu JQ i nie pozostawia śladu, zaś "czyszczenie" usuwa tresc atrybutu, wiec pozostaje on, ale jest pusty

// $('[data-idUser]').removeAttr("id");


// ========== WIELKOSCI węzła

// Zwraca szerokosc i wysokosc pudełka BEZ paddingów i marginów
// $('p').width();
// $('p').height();
// Ustawiamy wielkosci na X
// $('p').width("X");
// $('p').Height("X");


// Wielkosci z padddingami, bez borderów marginów
// $('p').innerWidth();
// $('p').innerHeight();

// Wielkosci z paddingami i borderami, bez marginów
// $('p').outerWidth();
// $('p').outerHeight();

// Wielkosci z paddingami, borderami i marginem
// $('p').outerWidth(true);
// $('p').outerHeight(true);


// scrollTop();

// Zwraca gdzie jest scroll
// $(document).scrollTop();

// Przesuwa scrolla na wysokosc X
// $(document).scrollTop("X");

// offset();

// Zwraca jak wysoko od górnego, lewego kąta ekranu jest element
// Zwraca ilosc pixeli od góry;
// $('p').offset().top;
// Zwraca ilosc od lewej
// $('p').offset().left;


// .posiotion();

// To samo co offset(), ale zwraca top i left względem elementu nadrzędnego, który jest relative, fixed albo absolute