import React from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

class UsersGetter extends React.Component {

    state = {
        usersLinks: []
    }

    componentDidMount() {

        axios.get("http://localhost:5000/users").then(response => {

            const savedUsersLinks = []
            for (var i = 0; i < response.data.length; i++) {
                savedUsersLinks.push(<Link key={i} to={"/edit/" + response.data[i]._id}><button>{response.data[i].username}</button></Link>)
            }

            this.setState({
                usersLinks: savedUsersLinks
            })

        })

    }

    render() {
        return (

            <div>
                {this.state.usersLinks}
            </div>

        )
    }

}

export default UsersGetter