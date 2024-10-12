// enum type
enum appMode {
    development = "DEV",
    production = "PROD",
}

const mode: appMode = appMode.development;

// console.log(mode)

// touple type
const tuple: [string, number, string] = ["masum", 10, 'ahmed'];
// console.log(tuple);


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

