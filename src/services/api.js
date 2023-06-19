
export const getData = (lat, lon) => {
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=8fca14d50d4a46c987a571cd4b762635`)
    .then(res => console.log(res.json))
}