import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"
import {harvestPlants} from "./harvester.js"
import {Catalog} from "./catalog.js"

const plan = createPlan()
plantSeeds(plan)
const planted = usePlants()
const harvested = harvestPlants(planted)
Catalog(harvested)

console.log(plan)
console.log(planted)
console.log(harvested)