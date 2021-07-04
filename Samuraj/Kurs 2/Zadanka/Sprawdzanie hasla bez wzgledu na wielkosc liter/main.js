// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

passwords.forEach((password, i) => {
    passwords[i] = password.toLowerCase();
})

// .map()
// metoda na liscie, tak jak forEach
// lista.map()
// W srodku dajemy callback jak w forEach, pierwszy parametr to element
// no i ta metoda ZWRACA nową, edytowaną tablice
// forEach nie zwraca

// pod nową zmienną dajemy tablice passwords, gdzie kazdy element jest malymi literami

// WAŻNE
// metoda map przy kazdym obrocie na elemencie zwraca w jego miejsce cos nowego, trzeba pisac w callbacku return COSTAM
// ALE
// funkcja strzałkowwa przy jednej linii bez wąsów sama sobie dopisuje return
const lowerCasePasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    div.textContent = "";
    // pod text dajemy stringa z inputa od razu zamieniajac go na male litery
    const text = e.target.value.toLowerCase();
    lowerCasePasswords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
        }
    })
}

input.addEventListener("input", showMessage)