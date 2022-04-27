import { useEffect, useState } from "react"
import axios from "axios"
import Country from "./Country"
import Buttons from "./Buttons"
import Pagebutton from "./Pagebutton"


export default function CountryList(){
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    
    const [pageNr, setPageNr] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/all?fields=name,region,area`)
        .then(res=>{
            
            setList([...res.data])
            setList2([...res.data])
            const tempArr = [...res.data]
            tempArr.length = 25
            
        })
        .catch((error)=>{
            console.log("there was an error");
        })    
    }, [])


    useEffect(()=>{
        let p = Math.ceil(list2.length/25)
        const tempArr = []
        for (let i = 1; i <= p ; i++) {
            tempArr.push(i)
        }

        setPageNr([...tempArr])
        setPage(1)
        

    }, [list2])




    const pageHandler=(pagenr)=>{
        setPage(pagenr)
    }

    const directionHandler = (direction)=>{
        let data = [...list2];
        if(direction===1){
            data.sort((a, b) => (a.name > b.name ? 1 : -1))
        } else{
            data.sort((a, b) => (a.name > b.name ? -1 : 1)) 
        }
        
        setList2([...data])
    }

    const filterHandler = (fltr)=>{
        let data = [...list2];
        let tempArr = [];

        switch (fltr) {
            case 1:
                data.forEach(d=>{
                    if(+d.area < 65300){
                        tempArr.push(d)
                    }
                })
                break;
            case 2:
                data.forEach(d=>{
                    if(d.region === "Oceania"){
                        tempArr.push(d)
                    }
                })
                break;  
                   
            default:
                tempArr = [...list];
                break;
        }

        setList2([...tempArr])
    }


    return(
        <section className="main">

            <Buttons filterHandler={filterHandler} directionHandler={directionHandler}></Buttons>
            <div className="pagenrholder">
                {
                    pageNr.map((nr)=>{
                        return <Pagebutton pageHandler={pageHandler} pagenr={page} key={nr} nr={nr}></Pagebutton>
                    })
                }
            </div>
            <div className="country-holder">
                {
                    list2.map((c,i)=>{
                        const start = page*25-25;
                        const finish = start + 25
                        if((i>=start)&&(i<finish)){
                        return <Country key={i} country={c}></Country>
                        }
                    })
                }
            </div>
        </section>
    )
}