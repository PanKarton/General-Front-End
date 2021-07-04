const message = document.querySelector(".hiddenMessage");
const input = document.querySelector("input");

const passwords = ["arek", "miriam19m"];
const hiddenMessage = ["JEBAC DISA KURWE ZWISA",
    "CUDOWNA DZIEWCZYNKA KOCHAM JĄ"
];


// Jak cos wpiszemy, to odpala sie wydarzenie, po kazdej zmianie
input.addEventListener("input", e => {

    message.textContent = "";

    passwords.forEach((password, index) => {
        if (e.target.value === password) {
            message.textContent = hiddenMessage[index];
            flag = true;
        }
    })

})

// Aktywne pole do pisania, tylko jedno na stronie moze byc, pamietajmy
input.addEventListener("focus", e => {
    e.target.classList.add(`active`);
})
input.addEventListener("blur", e => {
    e.target.classList.remove(`active`);
})