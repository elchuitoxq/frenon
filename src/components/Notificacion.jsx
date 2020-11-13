import React, {Fragment} from 'react';
import {useParams} from 'react-router-dom';

const Notificacion = () => {

    console.log(useParams());

    const {id} = useParams();

    const [arrayNotificacion, setNotificacion] = React.useState([]);

    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/notifications')
        const elements = await data.json()
        // console.log(users)
        setNotificacion(elements.filter(item => item.id == id))
    }

    return (
        <Fragment>
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificacion</h2>
            {
            arrayNotificacion.map( item => ( 
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
                ))
            }
            
        </Fragment>
    )
}

export default Notificacion;