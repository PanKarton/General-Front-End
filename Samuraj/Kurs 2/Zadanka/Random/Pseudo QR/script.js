const qr = document.querySelector(".qr");


for (let i = 0; i < 100; i++) {
    const qrCell = document.createElement("div");
    const ifBlack = Math.floor(Math.random() * 2);
    qrCell.classList.add("qrCell");
    ifBlack ? qrCell.classList.add("black") : "";
    qr.appendChild(qrCell);
}