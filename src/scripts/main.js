import {addPlant, usePlants} from "./field.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createPlan} from "./plan.js"

const plan = createPlan()
const asparagus = createAsparagus()
addPlant(asparagus)
const field = usePlants ()
const planArray = []

for (const step of plan) { 
    planArray.push(step)
    for (const subStep of step){
    planArray.push(subStep)
}
}

console.log("Welcome to the main module")
console.log(field)
console.log(plan)
console.log(planArray)