import Menu from "./Menu"
import Footer from "./Footer"

function Header({greeting, userName, tacos}){
    return(
        <div>
        <h1>this is my first component {greeting} {userName} and i dont like {tacos} tacos</h1>
        <Menu/>
        <Footer/>
        </div>

    )
}

export default Header