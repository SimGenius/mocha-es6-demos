/**
 * Created by SimGenius on 2017/7/26.
 */

class Person{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString(){
        return `${this.name} is ${this.age} years old`;

    }
}

export default Person;