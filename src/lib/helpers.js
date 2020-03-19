export const getData = async () => {
  const req = await fetch('https://api.coingecko.com/api/v3/coins/');
  const data = await req.json();
  return await data;
};
