let info = document.getElementById('info');
let imgs = document.getElementById('imgsTemp');
let info_img = document.getElementById('info-img');
let btnSearch = document.getElementById('btn-Search');
let citySelected = document.getElementById('citySelected');

btnSearch.addEventListener('click', () =>{
    let city = document.getElementById('city').value
    const APIKEY = 'f44615ab05beec274d98e82f98a64c0e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    fetch(url)
    .then(data => data.json())
    .then(temps =>{
        console.log(temps);

        if(temps.cod === '404' || city === ''){
            imgs.src = 'img/error.png';
            return false;
        }

        citySelected.textContent = city;
        info.textContent = `Co: ${temps.sys.country} | Temp: ${parseInt(temps.main.temp - 273)}ºC | Hu: ${temps.main.humidity}%`;

        switch(temps.weather[0].main){
            case 'Clear':
                imgs.src = 'img/clear.png';
                break;

            case 'Cloud':
                imgs.src = 'img/cloud.png';
                break;

            case 'Mist':
                imgs.src = 'img/mist.png';
                break;

            case 'Rain':
                imgs.src = 'img/rain.png';
                break;

            case 'Snow':
                imgs.src = 'img/snow.png';
                break;
            case 'Thunders':
                imgs.src = 'img/thunders.png';
                break;
        }

        info_img.textContent = temps.weather[0].description;
    });
})
