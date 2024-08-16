import "./styles/card.css"

export const Card=({value,data})=>{
    return(
        <>
        <div className="card">
            <h5>{value}</h5>
            <p>{data}</p>
        </div>
        </>
    )
}