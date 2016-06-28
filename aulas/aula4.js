var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
})();
var camaro = new Car('Camaro', 'Amarelo', 100);
camaro.printCar();
var Car2 = (function () {
    function Car2(nome, color, power) {
        this._nome = nome;
        this._color = color;
        this._power = power;
        Car2.list.push(nome);
    }
    ;
    Object.defineProperty(Car2.prototype, "name", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Car2.prototype.setName = function (value) {
        this._nome = value;
    };
    Car2.prototype.getName = function () {
        return this._nome;
    };
    Car2.list = [];
    return Car2;
})();
var ferrari = new Car2("Ferrari", "red", 200);
console.log(ferrari);
console.log(Car2.list);
var camaro2 = new Car2("Caramo2", "Red", 300);
console.log(Car2.list);
ferrari.name = "Ferrari2";
console.log(ferrari.name);
//# sourceMappingURL=aula4.js.map