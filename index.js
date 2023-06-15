// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock) {
    const scuberBlock = 42
    return Math.abs(pickUpBlock - scuberBlock);    
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(pickUpBlock){
   const feet = 264
   return (distanceFromHqInBlocks(pickUpBlock)*feet)
}
distanceFromHqInFeet(43)

function distanceTravelledInFeet(pickUpBlock, destinationBlock) {
    const aproxFeet = 264;
    const distance = Math.abs(destinationBlock - pickUpBlock);
    return distance * aproxFeet;
  }
  
  
  function calculatesFarePrice(pickUpBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(pickUpBlock, destinationBlock)
  
    if (distance <= 400) {
      return 0;
    }
    else if (distance<=2000){
        return ((distance-400)*0.02)
    }
    else if (distance<=2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
        
    }
  

