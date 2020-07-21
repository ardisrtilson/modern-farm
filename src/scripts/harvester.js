
export const harvestPlants = (used) => {
const uses = []
for (const step of used){
    let output = step.output
    let parsedOutput = parseInt(output, 10)

    if (step.type === "Corn") {
    parsedOutput /= 2
    }
    
    for (let i = 0; i < parsedOutput; i++) {
            uses.push(step)
}
}
return uses
}