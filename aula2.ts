var test:boolean = false;
var id:number = 2;

var decimal:number  = 5.4;
var hex:number = 0xf00d;
var binary:number = 0b1010;
var octal:number = 0o744;

var name:string = "String";
var carro:string = 'Camaro';
var text = `
    Name: ${name}
    Carro: ${carro}
`;

document.body.innerHTML = text;

var fruits:string[] = ["Apple","Watermelon","Lemon"];
var fruits:Array<string> = ["Apple","Watermelon","Lemon"];

enum Color {Red=1,Green,Blue};

console.log(Color.Red);

var list:any = 23;
console.log(list);
list = "String ...";

function printNumber(num:number):void{
    alert(num);
}

printNumber(32);

