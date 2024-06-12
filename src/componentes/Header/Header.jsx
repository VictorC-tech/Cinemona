import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around text-white p-5 mb-3 bg-red-700">
            <h1>Cinemona+</h1>
            <Navbar/>
        </header>
     );
}

export default Header ;