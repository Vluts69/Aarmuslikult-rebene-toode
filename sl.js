async function getData() {
  const response = await fetch('https://api.coingecko.com/api/v3/search?query=bitcoin');
  const data = await response.json();
  console.log(data);
}