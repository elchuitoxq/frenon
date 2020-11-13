import React, {Fragment} from 'react';
import {
    Link
  } from "react-router-dom";

const Notificaciones = () => {

    const [arrayNotificaciones, setNotificaciones] = React.useState([]);

    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/notifications')
        const elements = await data.json()
        // console.log(users)
        setNotificaciones(elements)
    }

    return (
        <Fragment>
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
            {
            arrayNotificaciones.map( item => (
                    <Link to={`notificacion/${item.id}`}>
                        <div key={`${item.id}`} className="notification mb30 mt10">
                            <div className="notif-left flex-display flexa-jcsb">

                                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                            <h4 className="textsize-3">{item.date}</h4>
                            </div>
                            <div className="notif-right">
                                <h4 className="mt4 textsize-2 fs-regular cBlue">{item.fromUser.name}</h4>
                                <p className="mt4 textsize-3 cGray">{item.content}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
            
        </Fragment>
    )
}

export default Notificaciones;