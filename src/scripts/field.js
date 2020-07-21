const field = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)){
        for (const step of seed){
            field.push(step)
        }
    }
    field.push(seed)
}

export const usePlants = () => {
    return field.slice()
}