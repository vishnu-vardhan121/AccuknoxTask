import "./styles/navstyle.css"

export const Navbar=()=>{
    return(
        <>
        <div className="nav">
            <div className="dashb"><p className="home">Home  {">"}</p> <p>  Dashboard V2</p></div>
            <div className="search"><input type="text" placeholder="&#128269; Search anything...."/></div>
        </div>
        </>
    )
}