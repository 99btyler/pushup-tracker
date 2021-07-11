import { Link } from 'react-router-dom';

const Navigator = () => {
    return (

        <nav>

            <ul>
                <li><Link to="/">Get</Link></li>
                <li><Link to="/add">Add</Link></li>
            </ul>

        </nav>

    )
}

export default Navigator