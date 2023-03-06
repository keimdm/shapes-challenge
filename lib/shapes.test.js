const { Shape, Circle, Square, Triangle } = require("./shapes.js");

describe("Shape", () => {
    describe("Constructor", () => {
        it("should make a Shape object", () => {
            const testShape = new Shape("X");
            expect(testShape).toBeInstanceOf(Shape);
        });
    });
});

describe("Circle", () => {
    describe("Constructor", () => {
        it("should make a Circle object", () => {
            const testCircle = new Circle("X");
            expect(testCircle).toBeInstanceOf(Circle);
        });
    });
});

describe("Square", () => {
    describe("Constructor", () => {
        it("should make a Square object", () => {
            const testSquare = new Square("X");
            expect(testSquare).toBeInstanceOf(Square);
        });
    });
});

describe("Triangle", () => {
    describe("Constructor", () => {
        it("should make a Triangle object", () => {
            const testTriangle = new Triangle("X");
            expect(testTriangle).toBeInstanceOf(Triangle);
        });
    });
});