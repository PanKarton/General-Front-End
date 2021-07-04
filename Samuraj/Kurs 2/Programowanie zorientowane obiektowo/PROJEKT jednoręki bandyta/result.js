class Result {
    static checkWinner(draw) {
        const [a, b, c] = draw;
        return ((a == b && b == c) || (a != b && b != c && c != a));
    }
    static setPrice(result, money) {
        return result ? money * 3 : 0;
    }
}