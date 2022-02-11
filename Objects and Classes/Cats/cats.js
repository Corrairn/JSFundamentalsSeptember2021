function catCreator(array) {
    class Cat {
        constructor(name,age) {
            this.name = name,
            this.age = age
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    for (const currentString of array) {
        let currentData = currentString.split(" ");
        let currentCat = new Cat(currentData[0], currentData[1]);
        currentCat.meow()
    }
}

catCreator(['Mellow 2', 'Tom 5']);