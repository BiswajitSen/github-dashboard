const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.length === 0) return true;

  return arr1.every((element, index) => element === arr2[index]);
};

export default areArraysEqual;
