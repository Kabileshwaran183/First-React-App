import logo from './assets/react-logo.png';
export default function Navbar(){
    return(
        <header>
            <nav>
                <img src={logo} alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}