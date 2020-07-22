const field = []

/* This function populates the field array with seed objects. */

export const addPlant = (seed) => {

    /* Checks for corn array*/

    if (Array.isArray(seed)){
        for (const step of seed){
            field.push(step)
        }
    }

    field.push(seed)
    
}

/* This function returns a populated array of seed objects. */

export const usePlants = () => {

    return field.slice()

}