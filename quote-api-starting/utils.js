const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const isValidQuote = obj => {
  if (obj) {
    if(obj.hasOwnProperty('quote') && obj.hasOwnProperty('person')) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getRandomElement,
  isValidQuote
};
