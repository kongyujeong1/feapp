import React from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';



const Header = props => {
    return (
        <div>
            <Navigation />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <h2>21조 과제입니다</h2>
          
            </header>
        </div>
    

     );
};
export default Header;