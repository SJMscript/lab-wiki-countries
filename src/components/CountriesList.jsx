import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";


function CountriesList(props) {

    return (
    <div>
    
    <h3>Country Links</h3>
    
      {props.paises.map((eachCountry)=>{
        return(

        <div key={eachCountry.alpha3Code}>
        <img style={{height: "50px"}} src={(`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`)} alt="flag"/>
        <br />
        <Link to={`/country/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link> 
        </div>
            
        )
      })}
    
    </div>
  )
}

export default CountriesList
