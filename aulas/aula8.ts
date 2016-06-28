var listcar = ["Camaro","Ferrari","Porsche"];

for(var i in listcar){
    console.log(i);
}

for(var car of listcar){
    console.log(car);
}

var colors = new Array(
    ["red","blue","orange"]
);

colors['title'] = "Colors";

console.log(colors);

for(var color of colors){
    console.log(color);
}