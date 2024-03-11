
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

canvas.width = 900
canvas.height = 600

// global vars

const cellsize = 100
const cellgap = 3
const gameGrid = []

// mouse

const mouse = {
    x:10,
    y:10,
    width:0.1,
    height:0.1
}
let canvasPosition = canvas.getBoundingClientRect()
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x = canvasPosition
    mouse.y = e.y = canvasPosition
})
canvas.addEventListener('mouseleave', function(){
    mouse.x = undefined
    mouse.y = undefined
})

// board

const controlBar = {
    width: canvas.width,
    height: cellsize
}
class Cell {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = cellsize
    }
    draw(){
        if(collision(this, mouse)){
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
    }
}
function createGrid(){
    for(let y = cellsize; y < canvas.height; y += cellsize){
        for(let x = 0; x < canvas.width; x += cellsize){
            gameGrid.push(new Cell(x, y))
        }
    }
}
createGrid();
function handlegameGrid(){
    for(let i = 0; i < gameGrid.length; i++){
        gameGrid[i].draw();
    }
}
handlegameGrid()
console.log(gameGrid)
// projectiles
// towers
// enemies
// resources
// utilities
function animate(){
    handlegameGrid()
    ctx.fillStyle = 'blue'
    ctx.fillRect(0,0,controlBar.width, controlBar.height)
    requestAnimationFrame(animate)
}
animate()


var collision = function(first,second){
    if(     !(  first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y
            )
    ){
        return true
    }
}