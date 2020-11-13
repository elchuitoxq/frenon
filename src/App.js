import React from 'react';
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline'
import IosMailOutline from 'react-ionicons/lib/IosMailOutline'
import IosCard from 'react-ionicons/lib/IosCard'
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline'
import IosExitOutline from 'react-ionicons/lib/IosExitOutline'
import Inicio from './components/Inicio'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Hoteles from './components/Hoteles';
import BuscadorHoteles from './components/BuscadorHoteles';
import Notificaciones from './components/Notificaciones';
import Notificacion from './components/Notificacion';
import Pagos from './components/Pagos';
import Configuraciones from './components/Configuraciones';

const App = () => {
  
  return (
   
    <Router>
      <div className="container">
        <nav className="h100vh w60 panel bcPurple flexa-jcsb flexa-ai">
            <div className="panel">
                {/* HOME */}
                <Link to="/" className="mt10 mb30 h50px"><IosAnalyticsOutline className="cWhite" fontSize="35px" color="#C9C9C9" beat={true}/></Link>
                {/* HOTELS   */}
                <Link to="/hoteles" className="mt30"><IosAppsOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></Link>
                {/* NOTIFICATIONS */}
                <Link to="/notificaciones" className="mt30"><IosMailOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></Link>
                {/* PAYMENTS */}
                <Link to="/pagos" className="mt30"><IosCard className="cWhite" fontSize="35px" color="#C9C9C9"/></Link>
            </div>          
            <a className="mb10" href="#"><IosExitOutline fontSize="35px" color="#C9C9C9"/></a>
        </nav>
        
        <section className="w96Porc panel-section flex-one pl12em pr12em">

            <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div>
                    <Link to="/buscador-hoteles" className="ml1em"><ion-icon className="icoGray" name="search-outline"></ion-icon></Link>
                    <Link to="/notificaciones" className="ml1em"><ion-icon className="icoGray" name="mail-unread-outline"></ion-icon></Link>
                    <Link to="/configuraciones" className="ml1em"><ion-icon className="icoGray" name="settings-outline"></ion-icon></Link>
                </div>
            </div>

            <div className="containerCenter">
                <Switch>
                    <Route path="/notificacion/:id">
                        <div className="sectionNotifications mb10">
                            <Notificacion/>
                        </div>
                    </Route>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    <Route path="/configuraciones">
                        <div className="row flex-dir-c content-inicio">
                            <Configuraciones/>
                        </div>
                    </Route>
                    <Route path="/hoteles">
                        <div className="row flex-dir-c content-inicio">
                            <h2 className="ml10px mt10 w96Porc textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>
                            <div className="row flex-wrap ">
                                <Hoteles/>
                            </div>
                        </div>
                    </Route>
                    <Route path="/buscador-hoteles">
                        <div className="row flex-dir-c content-inicio">
                            <h2 className="ml10px mt10 w96Porc textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>
                            <div className="row flex-wrap ">
                                <BuscadorHoteles/>
                            </div>
                        </div>
                    </Route>
                    <Route path="/notificaciones">
                        <div className="sectionNotifications mb10">
                            <Notificaciones/>
                        </div>
                    </Route>
                    <Route path="/pagos">
                        <div className="sectionNotifications mb10">
                            <Pagos/>
                        </div>
                    </Route>
                </Switch>
            </div>

        </section>
        
      </div>     
    </Router>
  );
}

export default App;
