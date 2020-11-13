import React, {Fragment} from 'react';

const Hoteles = () => {

    const [arrayHoteles, setHoteles] = React.useState([]);

    const [Hotel, setHotel] = React.useState({});

    React.useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/hotels')
        const elements = await data.json()
        setHoteles(elements)
    }

    const findData = (id) => {

        console.log(id);
        const data = arrayHoteles;

        console.log(arrayHoteles);

        const findHotel = data.filter(item => item.id == id);

        console.log(findHotel);

        setHotel(findHotel[0]);
    }

    return (
        <Fragment>
            {
            arrayHoteles.map( (item, index) => ( 
                <div key={index} className={`card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel wMin150 hMin150 m2px mt10 bcWhite`} style={{backgroundImage: "url(" + item.imgUrl + ")"}} >
                    <h2 className="textsize-1 fs-sbold cWhite">{item.name}</h2>
                    <a href="#modal" onClick={(e) => findData(item.id, e)} className="btn bcPurple">Reservar</a>
                </div>
                ))
            }

            <div class="modal" id="modal">
                <div class="modal-content">
                    <h3>{Hotel.name}</h3>
                    <img className="modal-img" src={Hotel.imgUrl} alt={Hotel.imgUrl}/>
                    <a class="modal-hide" href="#">✕</a>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Hoteles;