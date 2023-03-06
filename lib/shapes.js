class Shape {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    render() {
        return new Error("render() method is implemented in child classes");
    }
}

class Circle extends Shape {
    render() {
        const svgText = `
        <circle cx="150" cy="100" r="80" fill=${this.color} />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        `;
        return svgText;
    }
}

class Square extends Shape {
    render() {
        return "Square";
    }
}

class Triangle extends Shape {
    render() {
        return "Triangle";
    }
}

module.exports = { Shape, Circle, Square, Triangle };