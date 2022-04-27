export default function Country({country}) {
    
    return(
        <div className="country">
            <h2>{country.name}</h2>
            <p>Region: {country.region}</p>
            <p>Area: {country.area}</p>
        </div>
    )
}