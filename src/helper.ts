function generateRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function generateValidRandomPosition(
  max: number,
  invalidPositions: Array<number>,
  lockedPositions: Array<number>
): number {
  if (lockedPositions.length >= max - 1) return -1;

  let validPositions: Array<number> = [];
  invalidPositions.push(...lockedPositions);

  for (let i = 0; i < max; i++)
    if (!invalidPositions.includes(i)) validPositions.push(i);

  if (validPositions.length === 0) return -1;

  return validPositions[generateRandomNumber(validPositions.length)];
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

export { generateRandomNumber, getSliderValues, generateValidRandomPosition };
