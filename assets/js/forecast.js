const key = "Lwdsf6KV5stVbO6Qn9dcOHyuhou6RYPA";

// get weather information
const getWeatherInfo = async id => {
    const base_url = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base_url + query);
    const data = await response.json();

    return data[0];
    // console.log(data);
}

// getWeatherInfo("28143");

// get city information
const getCity = async (city) => {
    const base_url = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base_url + query);
    const data = await response.json();

    return data[0];
};

// getCity('Dhaka').then(data => {
//     return getWeatherInfo(data.Key);
// })
// .then(data => console.log(data))
// .catch(err => console.log(err));
