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
});

describe("Square", () => {
    describe("Constructor", () => {
        it("should make a Square object", () => {
            const testSquare = new Square("X", "Y");
            expect(testSquare).toBeInstanceOf(Square);
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
});