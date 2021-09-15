import React from "react"
import axios from "axios"

import "./UsersAdder.css"

class UsersAdder extends React.Component {

    state = {
        username: "",
        amount: undefined,
        days: undefined,
        progressData: []
    }

    render() {
        return (

            <div id="users-adder">

                <h1>Add user</h1>
                <hr />

                <div id="container">

                    <form onSubmit={this.onSubmitForm} autoComplete="off">
                        
                        <input type="text" placeholder="username" value={this.state.username} onChange={this.onChangeUsername} />
                        <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onChangeAmount} />
                        <input type="text" placeholder="days" value={this.state.days} onChange={this.onChangeDays} />

                        <input type="submit" value="+" />
                        
                    </form>

                </div>
            
            </div>

        )
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value.trim()
        })
    }

    onChangeAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    onChangeDays = (event) => {

        const progressData = []
        for (var i = 0; i < event.target.value; i++) {
            progressData.push(0)
        }

        this.setState({
            days: event.target.value,
            progressData: progressData
        })

    }

    onSubmitForm = (event) => {

        event.preventDefault()

        if ((this.state.username.length === 0 || this.state.username.length > 36) || this.state.amount === 0 || this.state.days === 0) {
            return
        }

        const newUser = {
            username: this.state.username,
            amount: this.state.amount,
            days: this.state.days,
            progressData: this.state.progressData
        }

        axios.post("http://localhost:5000/users/add", newUser).then(() => window.location = "/")

    }

}

export default UsersAdder