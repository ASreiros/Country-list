export default function Pagebutton({nr, pagenr, pageHandler}){

    return(
        <button onClick={()=>pageHandler(nr)} className={pagenr === nr? "cnr":"nr"}>{nr}</button>
    )
}