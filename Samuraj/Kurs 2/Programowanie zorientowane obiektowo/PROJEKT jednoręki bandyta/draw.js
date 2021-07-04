class Draw {
    constructor() {
        this.colors = [`red`, `blue`, `green`];
        // Przy tworzeniu instancji odpala sie funkcja, ktora od razu zwraca nowe kolory
        let _results = this.setResults();
        this.getResult = () => _results;
    }
    setResults() {
        let colors = [];
        for (let i = 0; i < this.colors.length; i++) {
            const random = Math.floor(Math.random() * this.colors.length);
            colors.push(this.colors[random]);
        }
        return colors;
    }
}