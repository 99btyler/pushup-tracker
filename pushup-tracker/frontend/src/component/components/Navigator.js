import { Link } from 'react-router-dom';

import "./Navigator.css"

const Navigator = () => {
    return (

        <nav id="navigator">

            <ul>
                <li><Link className="link" to="/">Get</Link></li>
                <li><Link className="link" to="/add">Add</Link></li>
            </ul>

        </nav>

    )
}

export default Navigator