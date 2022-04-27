export default function Buttons({directionHandler, filterHandler}){


    return (
        <div className="btn-holder">
            <div>
                <button onClick={()=>directionHandler(1)}>Ascending</button>
                <button onClick={()=>directionHandler(2)}>Descending</button>

            </div>
            <div>
                <button onClick={()=>filterHandler(1)}>Smaller than Lithuania by area</button>
                <button onClick={()=>filterHandler(2)}>That are in “Oceania” region</button>
               
                <button onClick={()=>filterHandler(9)}>Remove filters</button>
            </div>   
        </div>
    )
}