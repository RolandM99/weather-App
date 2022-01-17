import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { IoIosArrowForward, IoIosPin } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { v4 as uuid } from 'uuid';
import { getDataApi } from '../redux/Home/reducers';
import weather from '../assets/images/weathericon.jpg';

dom.watch();

const PlaceCoordo = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const PlaceCities = ['Kinshasa', 'Mbuji-Mayi', 'Bosobolo', 'Lusambo', 'Kasongo-Lunda', 'Lubumbashi', 'Goma', 'Bukavu', 'Kikwit', 'Uvira', 'Kamituga', 'Beni', 'Butembo', 'Fizi', 'Kindu', 'Kisangani', 'Boende', 'Gemena', 'Ilebo', 'Matadi', 'Gbadolite', 'Zongo', 'Kamituga', 'Bandundu', 'Mbandaka'];
  const searchedPlaces = searchQuery.trim().length > 0
    ? PlaceCities.filter((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) : PlaceCities;
  return (
    <>
      <div className="container">
        <div className="ttable">
          <div className="input">
            <input type="text" onChange={handleChange} value={searchQuery} id="input-data" placeholder="city/country" />
            <BiSearchAlt2 id="search" />
          </div>
          <div className="cities-table">

            {searchedPlaces.map((place) => (
              <Link className="link" key={uuid()} to="/details">
                <div
                  className="town"
                  id={place}
                  onClick={() => { dispatch(getDataApi(`${place}`)); }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => { dispatch(getDataApi(`${place}`)); }}
                >
                  <div className="my-link"><IoIosArrowForward className="arrow-forward" /></div>
                  <img src={weather} alt="weather-icons" />
                  <div className="ville">
                    <IoIosPin />
                    {place}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCoordo;
