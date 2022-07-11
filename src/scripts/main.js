// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 7)
let smallMug = makePottery("mug", 1, 3)
let platter = makePottery("platter", 7, 5)
let vase = makePottery("vase", 2, 4)
let bigVase = makePottery("vase", 7, 10)


console.log(mug)
console.log(smallMug)
console.log(platter)
console.log(vase)
console.log(bigVase)
// Fire each piece of pottery in the kiln

console.log(firePottery(mug, 2200))
firePottery(smallMug, 2210)
firePottery(platter, 1999)
firePottery(vase, 1999)
firePottery(bigVase, 2200)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



