let primaryKey = 0

export const makePottery = (shape, weight, height) => {
    const object = {
        objectShape: shape,
        objectWeight: weight,
        objectHeight: height
    }

    
    primaryKey++
    object.id = primaryKey
    return object
}


