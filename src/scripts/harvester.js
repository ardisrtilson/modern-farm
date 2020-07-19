
export const harvestPlants = (used) => {
const uses = []
const cornChecker = []
for (const step of used){
    const output = step.output
    const parsedOutput = parseInt(output, 10)
    for (let i = 0; i < parsedOutput; i++) {
        uses.push(step)
    }
}
return uses
}