import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav>

            <ul>
                <li><Link to="/">View</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>

        </nav>

    )
}

export default Navbar