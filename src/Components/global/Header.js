import React,{Component} from 'react';
import './css/Header.css';
import {Link } from 'react-router-dom';


class Header extends Component{

    render(){

        return(
            <header className="cabecera">
	            <span><h2>Tongue</h2></span>
                <Link to="/"><span>Home</span></Link>
                
           </header>
        );

    }

}

export default Header;