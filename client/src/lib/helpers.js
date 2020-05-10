export const getData = async () => {
  const req = await fetch('https://api.coingecko.com/api/v3/coins/');
  const data = await req.json();
  return await data;
};
export const cutFloatValue = (percentageValue) => {
  return Number.parseFloat(percentageValue).toFixed(2);
};
