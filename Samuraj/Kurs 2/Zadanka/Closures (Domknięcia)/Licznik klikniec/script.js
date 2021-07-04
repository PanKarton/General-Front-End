// Closure (domknięcie) pozwala dostac sie do zmiennej zadelklarowanej w funkcji z poza tej funkcji mimo, ze ta funkcja juz nie istnieje

// Zmienna dalej istnieje po skasowaniu funkcji

// Zmienna w pamieci istnieje tak długo jak istnieje do niej referencja

//funkcja domyslnie odpali sie od 0, ale przy wywoływaniu mozna podac argument i parametr start bedzie tym argumentem, a nie zerem 
const add = (start = 0) => {
    // Przypisuje pod number wartosc z wywolania albo 0
    let number = start;
    // Zwraca CIAŁO FUNKCJI, nie wywołuje jej
    return () => {
        let innerVariable = 20;
        document.body.textContent = `Kliknąłeś ${++number} razy, a innerVar to ${++innerVariable}`;
    }
}

// przypisujemy pod zmienną ciało tej funkcji i tą zmienną mozna teraz wywoływac funkcje anonimową którązwrócił add
const counter = add();

document.addEventListener(`click`, counter);


// WARTO ZAPAMIĘTAĆ


// Zmienna stworzona w funkcji zwracanej (innerVariable) będzie deklarowana i tworzona za kazdym razem od nowa, tylko te zmienne w funkcji wyzej będą trzymały sie doklejone do funkcji zwróconej i nie zginą

// Do tej pory musielismy odpalac zmienną globalną, zeby jakas funkcja mogła ją edytować, a teraz mozemy sobie stworzyc bezpieczną zmienną, której inna funkcja nie ruszy