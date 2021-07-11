import React from "react"
import axios from "axios"

class UsersEditor extends React.Component {

    state = {
        username: "",
        amount: 0,
        days: 0
    }

    componentDidMount() {

        axios.get("http://localhost:5000/users/" + this.props.match.params.id).then(response => {

            this.setState({
                username: response.data.username,
                amount: response.data.amount,
                days: response.data.days
            })

        })

    }

    render() {
        return (

            <div>

                <p>{this.state.username}, do {this.state.amount/this.state.days} pushups per day to reach {this.state.amount} pushups in {this.state.days} days</p>

                <form onSubmit={this.onSubmitForm}>
                    
                    <input type="submit" value="SAVE EDIT" />
                    
                </form>

            </div>

        )
    }

    onSubmitForm = (event) => {

        event.preventDefault()

    }

}

export default UsersEditor