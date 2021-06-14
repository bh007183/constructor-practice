// Supertype
function Animal (Species, Color){
    this.Species = Species,
    this.Color = Color
    this.cute = true
}
// Set Prototype
Animal.prototype = {
    constructor: Animal,
    eat: function eat(){
        console.log("nomonommonom")
    }

    
}
function Cat(name){
    this.name = name

}

// Subtype can use constructor properties

// const kitten = new Animal("Cat", "Orange")
// kitten.eat()


// alternative instance Subtype can  use prototype but unsure about properties

Cat.prototype={
    constructor: Cat
}

Cat.prototype = Object.create(Animal.prototype)


const kitten = new Cat("fluff")

// const kitten = Object.create(Animal.prototype)
console.log(kitten.name)







