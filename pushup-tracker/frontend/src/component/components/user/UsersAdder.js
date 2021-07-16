import React from "react"
import axios from "axios"

import "./UsersAdder.css"

class UsersAdder extends React.Component {

    state = {
        username: "",
        amount: 0,
        days: 0,
        progressData: []
    }

    render() {
        return (

            <form id="users-adder" onSubmit={this.onSubmitForm}>
                
                <label htmlFor="username">username: </label>
                <input type="text" id="username" value={this.state.username} onChange={this.onChangeUsername} autocomplete="off" />

                <label htmlFor="amount">amount: </label>
                <input type="text" id="amount" value={(this.state.amount !== 0 ? this.state.amount : "")} onChange={this.onChangeAmount} autocomplete="off" />

                <label htmlFor="days">days: </label>
                <input type="text" id="days" value={(this.state.days !== 0 ? this.state.days : "")} onChange={this.onChangeDays} autocomplete="off" />
                
                <input type="submit" value="ADD" />

            </form>

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

        if (this.state.username.length === 0 || this.state.amount === 0 || this.state.days === 0) {
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