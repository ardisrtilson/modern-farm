import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"

export const plantSeeds = (plan) => {
let planted = []
for (const step of plan) { 
    for (const subStep of step){
        switch (subStep) {
            case "Asparagus":
                planted = createAsparagus()
                break;
            case "Potato":
                planted = createPotato()
                break;
            case "Sunflower":
                planted = createSunflower()
                break;
            case "Wheat":
                planted = createWheat()
                break;
            case "Soybean":
                planted = createSoybean()
                break;
            case "Corn":
                planted = createCorn()
                break;
       }
       addPlant(planted)
}
}
}