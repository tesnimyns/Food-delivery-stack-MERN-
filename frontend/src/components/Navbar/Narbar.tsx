import React, { useContext, useState } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import SearchResults from '../SearchResults/SearchResults';

interface NavbarProps {
    setShowLogin: (value: boolean) => void;
    setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const Navbar: React.FC<NavbarProps> = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("menu");
    const [isVisible, setIsVisible] = useState(false);
    const [input, setInput] = useState("");
    const [results, setResults] = useState<any[]>([]); // Etat pour les résultats

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/"); // go back to home page
    }

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    const fetchData = (value: string) => {
        fetch("http://localhost:4000/api/food/list")
            .then(response => response.json())
            .then(json => {
                const foodItems = json.data; // Accéder à la clé 'data'
                const filteredResults = foodItems.filter((item: any) => {
                    return item.name.toLowerCase().includes(value.toLowerCase());
                });
                setResults(filteredResults); // Mettre à jour les résultats
            });
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='navbar'>
            <Link to='/'> <img src={assets.logo} alt="Logo" className='logo' /></Link>
            <ul className="navbar-menu">
                <a href='#' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</a>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobileapp")} className={menu === "mobileapp" ? "active" : ""}>Mobile App</a>
                <a href='#about-us' onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>About Us</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact</a>
            </ul>
            <div className="navbar-right">
                <div className="input-wrapper">
                    <FaSearch id='search-icon' onClick={handleClick} />
                    {isVisible && (
                        <div className='search-container'>
                            <input className='search-input' placeholder='Type to search...' value={input} onChange={handleChange} />
                            <SearchResults results={results} />
                        </div>
                    )}
                </div>

                <Link to='/cart'>
                    <div className="navbar-search-icon">
                        <FaShoppingBasket />
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                </Link>
                {!token ? <button onClick={() => setShowLogin(true)}>Sign In </button> : <div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                        <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default Navbar;
