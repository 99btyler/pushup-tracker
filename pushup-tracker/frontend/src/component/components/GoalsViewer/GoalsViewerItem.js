import { Link } from 'react-router-dom';

const GoalsViewerItem = ({ amount, days, _id }) => {
    return (

        <Link to={"/edit/" + _id}>
            <button>{amount} pushups in {days} days</button>
        </Link>

    )
}

export default GoalsViewerItem