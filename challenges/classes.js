// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker
{
    constructor(lwhProps)
    {
        this.length = lwhProps.length;
        this.width = lwhProps.width;
        this.height = lwhProps.height;
    }
    volume() { return this.length * this.width * this.height; }
    surfaceArea() { return 2 * (this.length * this.width  + this.length * this.height + this.width * this.height); }
}



const cuboid = new CuboidMaker
({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker
{
    constructor(side)
    {
        super({length: side, width: side, height: side});
        this.side = side;
    }
    volume() { return Math.pow(this.side, 3); }
    surfaceArea() { return Math.pow(this.side, 2)*6; }
}

let cube = new CubeMaker(3);

console.log(cube.volume());
console.log(cube.surfaceArea());

//tried with the same method names as in CuboidMaker, changed CuboidMaker's methods to see if Cube's overwrote, it did.