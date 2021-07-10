import React from "react"
import axios from "axios"

class GoalSetter extends React.Component {

    state = {
        amount: 0,
        days: 0
    }

    componentDidMount() {

        axios.get("http://localhost:5000/goalsetter/").then(response => {
            if (response.data.length === 1) {
                this.setState({
                    amount: response.data[0].amount,
                    days: response.data[0].days
                })
            }
        })
        
    }
    
    render() {
        return (

            <form onSubmit={this.onSubmitForm}>
                
                <input type="text" value={this.state.amount} onChange={this.onChangeAmount} />
                <p>PUSHUPS IN</p>
                <input type="text" value={this.state.days} onChange={this.onChangeDays} />
                <p>DAYS</p>

                <input type="submit" value="SAVE" />

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

        const newData = {
            amount: this.state.amount,
            days: this.state.days
        }

        axios.post("http://localhost:5000/goalsetter/add", newData).then(response => console.log(response.data))

        window.location = "/track"

    }

}

export default GoalSetter