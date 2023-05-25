import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import countriesData from '../countries.json';

function CountryDetails(props) {
    console.log("viendo props", props)

    const params = useParams()
    console.log("viendo params", params)

    const [details, setDetails] = useState(null)

    const getData = async () => {
        try {
          const response = await fetch('ruta/del/archivo.json');
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        //* 6. usar getData
        getData();
    } , [params.alpha3Code])

    if(details === null) {
        return (
            <div>
                <h3>... cargando</h3>
            </div>
        )
    }

  return (
    <div>
        <h2>Hola</h2>
        <p>Bandera:</p>
    </div>
  )
}

export default CountryDetails