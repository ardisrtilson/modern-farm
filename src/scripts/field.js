const field = []

export const addPlant = (plant) => {
    field.push(plant)
}

export const usePlants = () => {
    return field.slice()
}