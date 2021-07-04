const add = () => {
        let seconds = 0;
        let minutes = 0;
        return () => {
                if (++seconds === 60) {
                    minutes++;
                    seconds = 0;
                }
                // 4 implementacje w grawisach 
                // I) Jezeli minutes jest jednocyfrowe to wsadz 0 przed
                // II) Ilosc minut
                // III) Jezeli seconds jest jednocyfrowe, to wsadz 0 przed
                // IV) Ilsoc sekund
                document.body.textContent = `Czas na stronie: ${minutes<10? `0`: ``}${minutes}:${seconds<10?`0`:``}${seconds}`
}
}

const addSecond = add();

setInterval(addSecond, 100);