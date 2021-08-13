import React from 'react';
import Contacts from "../Header/Contacts/Contacts";



const Footer = (props) => {
    return(
        <footer className="footer">
            <Contacts phoneNumber={'+380995165196'} logoImg={'/images/logo.png'} />
        </footer>
    );
}


export default Footer;