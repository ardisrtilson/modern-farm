import {addPlant, usePlants} from "./field.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {createPlan} from "./plan.js"

const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()
const plan = createPlan()


for (const step of plan) { 
    for (const subStep of step){
        switch (subStep) {
            case "Asparagus":
                addPlant(asparagus);
                break;
            case "Potato":
                addPlant(potato);
                break;
            case "Sunflower":
                addPlant(sunflower);
                break;
            case "Wheat":
                addPlant(wheat);
                break;
            case "Soybean":
                addPlant(soybean);
                break;
            case "Corn":
                addPlant(corn);
                break;
       }
}
}

export const field = usePlants ()
