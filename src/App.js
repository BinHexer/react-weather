import { useState } from 'react';
import './App.css';
import ForecastBox from './components/forecast-box';
import TodayBox from './components/today-box';
const api =
{
  key: "e699a12f87a965c5c96ffec58586f8cb",
  base: "https://api.openweathermap.org/data/2.5/",
  iconBase: "http://openweathermap.org/img/wn/ICON@4x.png"
  // https://openweathermap.org/weather-conditions
  // --> 2X 4X etc. is size
  // <WeatherToday weather={weather} />
}
const screens = {
  today: 1,
  forecastDaily: 2
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [fcDaily, setFcDaily] = useState({});
  const [background, setBackground] = useState('');
  const [screen, setScreen] = useState(screens.today);

  const search = evt => {
    if (evt.key === "Enter") {
      console.log("Press Enter");
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          if (typeof result.main != "undefined") {
            setWeather(result);
            console.log('Today: ', result);
            setBackground((typeof result.main != "undefined") ? ((result.main.temp > 16.0) ? 'warm' : '') : '');
            fetch(`${api.base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&units=metric&APPID=${api.key}`)
              .then(res => res.json())
              .then(result => {
                setFcDaily(result.daily.splice(1, 5));
                console.log('All: ', result);
              });
          }
        });
      setQuery('');
    }
  }

  return (
    <div className={`app ${background}`}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
            </div>

            <div className="weather-nav">
              {(screen !== screens.forecastDaily) &&
                <button class="switch-btn" onClick={() => { setScreen(screens.forecastDaily); }}>Forecast</button>
              }
              {(screen !== screens.today) &&
                <button class="switch-btn" onClick={() => { setScreen(screens.today); }}>Today</button>
              }
            </div>

            {(screen === screens.today) &&
              <TodayBox api={api} weather={weather} />
            }

            {(screen === screens.forecastDaily) &&
              <ForecastBox api={api} fcDaily={fcDaily} />
            }


          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;