import React from "react"
import axios from "axios"

import "./UsersEditor.css"

class UsersEditor extends React.Component {

    state = {

        // Uneditable
        username: "",
        amount: 0,
        days: 0,

        // Editable
        progressData: []

    }

    componentDidMount() {

        axios.get("http://localhost:5000/users/" + this.props.match.params.id).then(response => {

            this.setState({

                username: response.data.username,
                amount: response.data.amount,
                days: response.data.days,

                progressData: response.data.progressData

            })

        })

    }

    render() {

        const usersEditorInputs = []
        for (var i = 0; i < this.state.progressData.length; i++) {
            usersEditorInputs.push(<input key={i} type="text" id={i} value={this.state.progressData[i]} onChange={this.onChangeUsersEditorInput} autocomplete="off" />)
        }

        return (

            <div id="users-editor">

                <p>{this.state.username}, do {this.state.amount/this.state.days} pushups per day to reach {this.state.amount} pushups in {this.state.days} days</p>

                <form onSubmit={this.onSubmitForm}>

                    {usersEditorInputs}
                    
                    <input type="submit" value="SAVE EDIT" />
                    
                </form>

            </div>

        )
    }

    onChangeUsersEditorInput = (event) => {

        const progressDataCopy = [...this.state.progressData]
        progressDataCopy[event.target.id] = event.target.value

        this.setState(oldState => ({
            progressData: progressDataCopy
        }))

    }

    onSubmitForm = (event) => {

        event.preventDefault()

        const editedUser = {

            username: this.state.username,
            amount: this.state.amount,
            days: this.state.days,

            progressData: this.state.progressData

        }

        axios.post("http://localhost:5000/users/edit/" + this.props.match.params.id, editedUser).then(() => window.location = "/")

    }

}

export default UsersEditor