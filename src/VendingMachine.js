import React from "react";
import { Link } from "react-router-dom"

const VendingMachine = () => {

    return(
        <ul>
        <li>
        <Link to="/cookies">Cookie</Link>
        </li>
        
        <li>
        <Link to="/twix">Twix</Link>
        </li>
        
        <li>
        <Link to="/cheesecake">Cheesecake</Link>
        </li>
        
        </ul>

    )



}

export default VendingMachine;

