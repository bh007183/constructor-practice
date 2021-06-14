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



Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat


const kitten = new Cat("fluff")

// const kitten = Object.create(Animal.prototype)
console.log(kitten.constructor)







