import React, {Fragment} from 'react';

const Pagos = () => {

    const [arrayPagos, setPagos] = React.useState([]);

    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/payments')
        const elements = await data.json()
        // console.log(users)
        setPagos(elements)
    }

    return (
        <Fragment>
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Pagos</h2>
            {
            arrayPagos.map( item => ( 
                    <div key={`${item.id}`} className="notification mb30 mt10">
                        <div className="notif-left flex-display flexa-jcsb">

                            {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                        <h4 className="textsize-3">{item.date}</h4>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-2 fs-regular cBlue">Precio: ${item.price}</h4>
                            <p className="mt4 textsize-3 cGray">Reservación:  #{item.idReservation}</p>
                            <p className="mt4 textsize-3 cGray">Medio de Pago{item.Payments}</p>
                        </div>
                    </div>
                ))
            }
            
        </Fragment>
    )
}

export default Pagos;