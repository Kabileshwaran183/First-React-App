import logo from '/src/assets/react-logo.png';
export default function Navbar(){
    return(
        <header>
            <nav>
                <img src={logo} alt="React logo" />
                <span>React Facts</span>
            </nav>
        </header>
    )
}