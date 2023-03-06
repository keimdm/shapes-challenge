const { Shape, Circle, Square, Triangle } = require("./shapes.js");

describe("Shape", () => {
    describe("Constructor", () => {
        it("should make a Shape object", () => {
            const testShape = new Shape("X", "Y");
            expect(testShape).toBeInstanceOf(Shape);
        });
    });
    describe("Render", () => {
        it("should throw an Error", () => {
            const testShape = new Shape("X", "Y");
            const test = testShape.render();
            expect(test).toEqual(new Error("render() method is implemented in child classes"));
        });
    });
});

describe("Circle", () => {
    describe("Constructor", () => {
        it("should make a Circle object", () => {
            const testCircle = new Circle("X", "Y");
            expect(testCircle).toBeInstanceOf(Circle);
        });
    });
    describe("Render", () => {
        it("should return the correct svg text", () => {
            const testCircle = new Circle("X", "Y");
            const test = testCircle.render();
            const svgTest = `
        <circle cx="150" cy="100" r="82" fill="Y" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">X</text>
        `;
            expect(test).toEqual(svgTest);
        });
    });
});

describe("Square", () => {
    describe("Constructor", () => {
        it("should make a Square object", () => {
            const testSquare = new Square("X", "Y");
            expect(testSquare).toBeInstanceOf(Square);
        });
    });
    describe("Render", () => {
        it("should return the correct svg text", () => {
            const testSquare = new Square("X", "Y");
            const test = testSquare.render();
            const svgTest = `
        <rect x="68" y="18" width="164" height="164" fill="Y" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">X</text>
        `;
            expect(test).toEqual(svgTest);
        });
    });
});

describe("Triangle", () => {
    describe("Constructor", () => {
        it("should make a Triangle object", () => {
            const testTriangle = new Triangle("X", "Y");
            expect(testTriangle).toBeInstanceOf(Triangle);
        });
    });
    describe("Render", () => {
        it("should return the correct svg text", () => {
            const testTriangle = new Triangle("X", "Y");
            const test = testTriangle.render();
            const svgTest = `
        <polygon points="150, 18 244, 182 56, 182" fill="Y" />

        <text x="150" y="160" font-size="60" text-anchor="middle" fill="white">X</text>
        `;
            expect(test).toEqual(svgTest);
        });
    });
});