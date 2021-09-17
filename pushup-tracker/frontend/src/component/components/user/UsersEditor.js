import React from "react"
import axios from "axios"

import "./UsersEditor.css"

class UsersEditor extends React.Component {

    state = {
        username: "",
        amount: 0,
        days: 0,
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
            usersEditorInputs.push(<input key={i} type="text" id={i} value={this.state.progressData[i]} onChange={this.onChangeUsersEditorInput} />)
        }

        return (

            <div id="users-editor">

                <h1>Edit {this.state.username}'s progress data</h1>
                <hr />

                <p>Goal: {this.state.amount} pushups in {this.state.days} days ({(this.state.amount/this.state.days).toFixed(2)} per day)</p>
                <br />

                <div id="container">

                    <form onSubmit={this.onSubmitForm}>

                        {usersEditorInputs}
                        <br />
                        
                        <input type="submit" value="SAVE EDITS" />

                    </form>

                    <div id="container-footer">
                        <button onClick={this.onClickButtonDeleteUser}>DELETE USER</button>
                    </div>

                </div>
            
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

    onClickButtonDeleteUser = () => {

        if (!window.confirm(`Are you sure? ${this.state.username}'s data will be erased.`)) {
            return
        }

        axios.delete("http://localhost:5000/users/delete/" + this.props.match.params.id).then(() => window.location = "/")

    }

}

export default UsersEditor