import React from "react"
import axios from "axios"

class UsersAdder extends React.Component {

    state = {
        username: "",
        amount: 0,
        days: 0
    }

    render() {
        return (

            <form onSubmit={this.onSubmitForm}>
                
                <label htmlFor="username">username: </label>
                <input type="text" id="username" value={this.state.username} onChange={this.onChangeUsername} />

                <label htmlFor="amount">amount: </label>
                <input type="text" id="amount" value={this.state.amount} onChange={this.onChangeAmount} />

                <label htmlFor="days">days: </label>
                <input type="text" id="days" value={this.state.days} onChange={this.onChangeDays} />
                
                <input type="submit" value="ADD" />

            </form>

        )
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onChangeAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    onChangeDays = (event) => {
        this.setState({
            days: event.target.value
        })
    }

    onSubmitForm = (event) => {

        event.preventDefault()

        if (this.state.username.trim().length < 3 || this.state.amount === 0 || this.state.days === 0) {
            return
        }

        const newUser = {
            username: this.state.username.trim(),
            amount: this.state.amount,
            days: this.state.days
        }

        axios.post("http://localhost:5000/users/add", newUser).then(() => window.location = "/")

    }

}

export default UsersAdder