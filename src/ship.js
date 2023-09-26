const Ship = (length)  => {
  const shipSize = length;
  let hitsCounter = 0;
  const id = makeid(5);

  const hit = () => {
    hitsCounter++;
  }

  const isSunk = () => {
    return (hitsCounter >=  shipSize) ? true : false;
  };
  
  return { shipSize, id, isSunk, hit }
}


module.exports = Ship;

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}