const searchForm = document.querySelector(".search-location");
const card = document.querySelector('.card');
const weatherInfoSection = document.querySelector(".details");
const weatherImage = document.querySelector(".card-image-top");
const icon = document.querySelector('.icon img');


// update UI based on the data
const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weatherDetails = data.weatherDetails;

    // ----------
    // we can do the upper code with the newly introduced "destructuring method"
    // in that case we have to create variable with same name, and this will still return code like the upper code
    // -----------

    // destructuring
    const {cityDetails, weatherDetails} = data;
    console.log(data);

    // DOM update with data
    weatherInfoSection.innerHTML = `
        <h5 class="my-3 tracking-[0.3em] uppercase font-medium text-md">${cityDetails.EnglishName}</h5>
        <div class="my-3 text-xs tracking-widest text-gray-400">${weatherDetails.WeatherText}</div>
        <div class="my-8 text-6xl tracking-wider font-extralight">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // updating image depending on the time
    let src = null;
    if (weatherDetails.IsDayTime) {
        src = 'assets/img/day.jpg';
    }else {
        src = "assets/img/night.jpg";
    }
    weatherImage.setAttribute('src', src);

    // updating icon depending on the weather condition
    const iconSrc = `https://www.accuweather.com/images/weathericons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // removing hidden class from the card
    if(card.classList.contains('hidden')) {
        card.classList.remove('hidden')
    }
};

// update city all the time when user searches for it
const updateCity = async city => {
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeatherInfo(cityDetails.Key);

    return { cityDetails, weatherDetails };
};

searchForm.addEventListener('submit', e => {
    // prevent default
    e.preventDefault();

    // get form value
    const cityName = searchForm.city.value.trim();
    searchForm.reset();

    updateCity(cityName)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});