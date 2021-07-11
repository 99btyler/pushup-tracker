import React from "react"
import axios from "axios"

class GoalEditor extends React.Component {

    state = {
        amount: 0,
        days: 0,
        progress: []
    }

    componentDidMount() {

        axios.get("http://localhost:5000/goals/" + this.props.match.params.id).then(response => {

            this.setState({
                amount: response.data.amount,
                days: response.data.days,
                progress: response.data.progress
            })

        })

    }

    render() {
        return (

            <div>
                
                <p>To reach {this.state.amount} pushups in {this.state.days} days, do {this.state.amount/this.state.days} per day</p>

                <form>

                    <p>{this.state.progress}</p>
                    
                    <input type="submit" value="SAVE" />

                </form>

            </div>

        )
    }

}

export default GoalEditor