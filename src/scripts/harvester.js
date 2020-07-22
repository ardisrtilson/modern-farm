/* This function examines the output of each object in the 
array fed into the "used" parameter and pushes that number 
of plant objects into a new array, which it then returns.*/

export const harvestPlants = (used) => {

    const uses = []

        for (const step of used){
            
            let output = step.output

/* Since I input the output object as a string, I use the
following string to convert each string to an integer.*/

            let parsedOutput = parseInt(output, 10)

/* If the current step of the string is corn, the output should be halved.*/

        if (step.type === "Corn") {
            
            parsedOutput /= 2

        }

/* The section below populates the uses array with the number of objects
specified by the output and returns the populated array. */
    
        for (let i = 0; i < parsedOutput; i++) {
            uses.push(step)
        }
    }   

    return uses

    }