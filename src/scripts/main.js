import {createPlan} from "./plan.js"
import {addPlant, usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"

const seed = createPlan()
addPlant(seed)
const toPlant = usePlants ()
const planted = plantSeeds (toPlant)

console.log(seed)
console.log (toPlant)
console.log (planted)