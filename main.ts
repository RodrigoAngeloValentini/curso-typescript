///<reference path="Color.ts"/>

module ColorModule{
    var red = new Color();
    red.name = "red";
    red.code = "#FF1234";
    console.log(red.getColor());
}

var blue = new ColorModule.Color();
blue.name = "Blue";
blue.code = "blue";
console.log(blue);