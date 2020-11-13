import React, {Fragment} from 'react';
import Notificaciones from './Notificaciones';
import Hoteles from './Hoteles';

import {
    Link
  } from "react-router-dom";

const Inicio = () => {

    return (
        <Fragment>
            <div className="row flex-dir-c content-inicio">
                <div className="card-content p40 w96Porc gradient">
                    <h4 className="textsize-2 fs-regular cWhite">Bienvenido</h4>
                    <h2 className="textsize-1 fs-sbold cWhite mt10">David Anderson</h2>
                    <hr/>
                    <p className="textsize-3 cWhite mt10">is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum text ever since the 1500s, when </p>
                </div>
                <div className="flex-display flex-dir-r card-content contents-links  p10 w96Porc mt10 bcWhite flexa-jcsb">
                    <Link to="/notificaciones">
                        <div className="bloque bl mb30 flex-display flex-dir-r">
                            <div className="notif-left ">
                                <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}} name="mail-open-outline"></ion-icon>
                            </div>
                            <div className="notif-right">
                                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Notificaciones</h4>
                                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/hoteles">
                        <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                            <div className="notif-left ">
                                <ion-icon className="cPurple  icoSize3m" style={{fontSize:'3em'}}  name="bed-outline"></ion-icon>                                
                            </div>
                            <div className="notif-right">
                                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Hoteles</h4>
                                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                            </div>
                        </div>
                    </Link>
                    <Link to="/pagos">
                        <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                            <div className="notif-left ">
                                <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}}  name="card-outline"></ion-icon>                                
                            </div>
                            <div className="notif-right">
                                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Pagos recibidos</h4>
                                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                            </div>
                        </div>
                    </Link>
                </div>

                <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>

                <div className="row flex-dir-r w96Porc flex-wrap ">

                    <Hoteles/>
                </div>

            </div>
            
            <div className="sectionRight mb10">
                <Notificaciones/>
            </div>
            
        </Fragment>
    )
}

export default Inicio;