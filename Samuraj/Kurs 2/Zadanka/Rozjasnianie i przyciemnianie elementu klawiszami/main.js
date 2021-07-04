let opacity = 1;
let color = 0;
const div = document.querySelector("div");
document.addEventListener("keydown", e => {
    // if (e.code === "ArrowUp") {
    //     if (opacity >= 0) {
    //         div.style.opacity = opacity;
    //         opacity -= 0.01;
    //     }
    // } else if (e.code === "ArrowDown") {
    //     if (opacity <= 1) {
    //         div.style.opacity = opacity;
    //         opacity += 0.01;
    //     }
    // }

    switch (e.code) {
        case "ArrowUp":
            if (color < 255) {
                div.style.backgroundColor = `rgb(${++color},${color},${color})`;
                console.log(color);
            }
            break;
        case "ArrowDown":
            if (color > 0) {
                div.style.backgroundColor = `rgb(${--color},${color},${color})`;
                console.log(color);
            }
            break;
    }

});