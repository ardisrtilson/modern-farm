import {plantSeeds} from "./tractor.js"
import {createPlan} from "./plan.js"
const plan = createPlan()
const field = plantSeeds(plan)
const harvest = []
export const harvestSeeds = (field) => {
    for(const steps of field) {
        harvest.push(steps)
    }
return harvest
}