// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location <= 42 ){
        return (42 - location)
    }else {
        return (location - 42)   
    }
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination){
    if (destination > start) { 
        const  distance = (destination - start) * 264
        return distance
    } else {
        const distance = (start - destination) * 264
        return distance
    }

}


function calculatesFarePrice(startBlock, endBlock){
    let distance = distanceTravelledInFeet(startBlock, endBlock)

    if (distance <= 400){
        return 0
    } else if ( distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance <= 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}
