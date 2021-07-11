import React from "react"
import axios from "axios"

class GoalCreator extends React.Component {

    state = {
        amount: 0,
        days: 0
    }

    render() {
        return (

            <form onSubmit={this.onSubmitForm}>
                
                <label for="amount">amount: </label>
                <input type="text" id="amount" value={this.state.amount} onChange={this.onChangeAmount} />

                <label for="days">days: </label>
                <input type="text" id="days" value={this.state.days} onChange={this.onChangeDays} />

                <input type="submit" value="CREATE" />

            </form>

        )
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

        if (this.state.amount === 0 || this.state.days === 0) {
            return
        }
        
        const progress = []
        for (var i = 0; i < this.state.days; i++) {
            progress.push(0)
        }

        const newData = {
            amount: this.state.amount,
            days: this.state.days,
            progress: progress
        }
        
        axios.post("http://localhost:5000/goals/create", newData).then(() => window.location = "/")

    }

}

export default GoalCreator