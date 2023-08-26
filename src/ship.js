const Ship = (length)  => {
  const shipSize = length;
  let hitsCounter = 0;

  const hit = () => {
    hitsCounter++;
  }

  const isSunk = () => {
    return (hitsCounter >=  shipSize) ? true : false;
  };
  
  return { shipSize , isSunk, hit }
}


module.exports = Ship;