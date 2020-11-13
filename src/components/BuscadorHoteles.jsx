import React, {Fragment} from 'react';

const BuscadorHoteles = () => {

    const [arrayBuscadorHoteles, setBuscadorHoteles] = React.useState([]);
    const [Hotel, setHotel] = React.useState({});

    React.useEffect(() => {
        fetchData()
    }, []);

    

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/hotels')
        const elements = await data.json()
        // console.log(users)
        setBuscadorHoteles(elements)
    }

    const findData = (id) => {

        console.log(id);
        const data = arrayBuscadorHoteles;

        console.log(arrayBuscadorHoteles);

        const findHotel = data.filter(item => item.id == id);

        console.log(findHotel);

        setHotel(findHotel[0]);
    }

     const handleInputChange = (event) => {
        console.log(event.target.value);

        var text = event.target.value
        const data = arrayBuscadorHoteles

        const newData = data.filter(function(item){
            const itemData = item.name.toLowerCase()
            const textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })

        if(event.target.value.length > 0){
            setBuscadorHoteles(
                newData
            );
        } else {
            fetchData();
        }
        
    }

    return (
        <Fragment>
            <div className="box-search">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="form-control"
                    name="hotel"
                    onChange={handleInputChange}
                ></input>
            </div>
            
            {
            arrayBuscadorHoteles.map( (item, index) => ( 
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

export default BuscadorHoteles;