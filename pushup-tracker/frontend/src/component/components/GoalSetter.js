import React from "react"
import axios from "axios"

class GoalSetter extends React.Component {

    state = {
        amount: 0,
        days: 0
    }

    componentDidMount() {

        axios.get("http://localhost:5000/goalsetter/").then(response => {

            if (response.data.length === 0) {
                return
            }

            this.setState({
                amount: response.data[0].amount,
                days: response.data[0].days
            })

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

        if (this.state.amount === 0 || this.state.days === 0) {
            return
        }

        const newData = {
            amount: this.state.amount,
            days: this.state.days
        }

        axios.get("http://localhost:5000/goalsetter/").then(response => {

            if (response.data.length === 0) {

                axios.post("http://localhost:5000/goalsetter/add", newData).then(() => window.location = "/track")

            } else {

                if (newData.amount === response.data[0].amount && newData.days === response.data[0].days) {
                    return
                }

                axios.post("http://localhost:5000/goalsetter/update/" + response.data[0]._id, newData).then(() => window.location = "/track")

            }

        })

    }

}

export default GoalSetter