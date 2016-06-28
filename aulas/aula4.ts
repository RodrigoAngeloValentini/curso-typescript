class Car{
    constructor(
        public name:string,
        public color:string,
        public power:number
    ){};
    printCar():void{
        console.log(this.name,this.color,this.power);
    }
}

var camaro = new Car('Camaro','Amarelo',100);
camaro.printCar();

class Car2{
    private _nome:string;
    private _color:string;
    private _power:number;
    public static list:Array<string> = [];

    constructor(nome:string,color:string,power:number){
        this._nome=nome;
        this._color=color;
        this._power=power;
        Car2.list.push(nome);
    };

    get name():string {
        return this._nome;
    }

    set name(value:string) {
        this._nome = value;
    }

    setName(value:string){
        this._nome=value;
    }

    getName():string{
        return this._nome;
    }
}

var ferrari = new Car2("Ferrari","red",200);
console.log(ferrari);
console.log(Car2.list);

var camaro2 = new Car2("Caramo2","Red",300);
console.log(Car2.list);

ferrari.name = "Ferrari2";
console.log(ferrari.name);