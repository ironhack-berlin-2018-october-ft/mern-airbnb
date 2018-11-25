import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css' // Import of Mapbox CSS
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ';



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
