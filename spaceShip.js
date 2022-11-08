// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip{
    constructor(name, topSpeed){
        this.name = name
        this.topSpeed = topSpeed
    }
    accelerate() {
        console.log(`${this.name} is moving to ${this.topSpeed}`) 
    }
}

const voyager = new SpaceShip("Voyager","9.975")
voyager.accelerate()
// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const protostar = new SpaceShip("USS Protostar","warp 9.970")
const sutherland = new SpaceShip("USS Sutherland","warp 9.300")
const ganges = new SpaceShip("USS Ganges","warp 5.000")

protostar.accelerate()
sutherland.accelerate()
ganges.accelerate()

