import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"
import {usePlants} from "./field.js"

const plan = createPlan()
plantSeeds(plan)
const planted = usePlants()
const harvested = harvestPlants(planted)

console.log(plan)
console.log(planted)
console.log(harvested)