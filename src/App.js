import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Map from './components/Map';
import axios from 'axios';
import { useMap } from 'react-leaflet/hooks';

function App() {

  const [data, setData] = useState({
    ip: '0.0.0.0',
    city: 'City',
    region: 'Region',
    timezone: 'Timezone',
    isp: 'ISP',
    coords: [51.505, -0.09]
  });

  const handleClick = async (value) => {
    try {
      const config = {
        params: {
          apiKey: 'at_Me79RGi77ItNgR0SbNf0NM2r0xD7M',
          ipAddress: value
        },
        responseType: 'json',
      }
      await axios.get('https://geo.ipify.org/api/v2/country,city', config)
      .then(res => {
        console.log(res.data);
        setData({
          ...data,
          ip: res.data?.ip,
          city: res.data.location.city,
          region: res.data.location.region,
          timezone: res.data.location.timezone,
          isp: res.data.isp,
          coords: [res.data.location.lat, res.data.location.lng]
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header onClick={handleClick}/>
      <Details 
        ip={data.ip}
        city={data.city}
        region={data.region}
        timezone={data.timezone}
        isp={data.isp}
      />
      <Map coords={data.coords}/>
    </>
  );
}

export default App;
