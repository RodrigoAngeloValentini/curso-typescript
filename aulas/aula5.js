function people(value) {
    console.log(value);
}
people({ name: "rodrigo", age: 22 });
function people2(name, age) {
    return { name: name, age: age };
}
console.log(people2("Rodrigo", 22));
function getColor(codeColor, title) {
    if (title) {
        return { title: title, codeColor: codeColor };
    }
    return { codeColor: codeColor };
}
console.log(getColor("#000"));
console.log(getColor("#000", "Black"));
//# sourceMappingURL=aula5.js.map