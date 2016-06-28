module App{
    export interface ICar{
        name:string;
    }
}

module App{
    class Car implements ICar{
        name:string;
        color:string;
    }

    var mustange = new Car();
    console.log(mustange);
}