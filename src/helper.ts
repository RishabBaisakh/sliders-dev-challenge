function generateRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function getSliderValues(size: number): Array<number> {
  let max = 100;
  let sum = 0;
  let generatedNumber;
  const sliderValues: Array<number> = [];
  for (let i = 0; i < size - 1; i++) {
    generatedNumber = generateRandomNumber(max - sum);
    sliderValues.push(generatedNumber);
    sum += generatedNumber;
  }
  sliderValues.push(max - sum);
  return sliderValues;
}

export { generateRandomNumber, getSliderValues };
