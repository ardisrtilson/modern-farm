import {plantSeeds} from "./tractor.js"
import {createPlan} from "./plan.js"

const plan = createPlan()
const planted = plantSeeds(plan)
console.log(plan)
console.log(planted)
