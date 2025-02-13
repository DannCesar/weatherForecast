// const token = "4cd7b5d2869e40619a7162252251302";
const weatherApi = `https://api.weatherapi.com/v1/current.json?key=4cd7b5d2869e40619a7162252251302&q=Birigui&aqi=yes`;

export async function consumptionApiForecast() {
  const response = await fetch(weatherApi);
  const data = await response.json();
  return data;
}
