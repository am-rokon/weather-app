const key = "Lwdsf6KV5stVbO6Qn9dcOHyuhou6RYPA";

// get weather information
const getWeatherInfo = async id => {
    const base_url = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base_url + query);
    const data = await response.json();

    return data[0];
}

// get city information
const getCity = async (city) => {
    const base_url = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base_url + query);
    const data = await response.json();

    return data[0];
};

