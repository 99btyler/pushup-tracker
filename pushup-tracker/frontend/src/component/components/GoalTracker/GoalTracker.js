import React from "react";
import axios from "axios";

import GoalTrackerItem from "./GoalTrackerItem.js"

class GoalTracker extends React.Component {

    state = {

        goalSetterAmount: 0,
        goalSetterDays: 0,

        goalTrackerItems: []

    }

    componentDidMount() {

        axios.get("http://localhost:5000/goalsetter/").then(response => {

            if (response.data.length === 0) {
                return
            }

            this.setState({
                goalSetterAmount: response.data[0].amount,
                goalSetterDays: response.data[0].days
            })

        })

        axios.get("http://localhost:5000/goaltrackeritem").then(response => {

            if (this.state.goalSetterDays > response.data.length) {

                // add needed GoalTrackerItems

                const difference = this.state.goalSetterDays - response.data.length

                for (var i = 0; i < difference; i++) {

                    const newData = {
                        day: "Day " + (response.data.length + (i+1)),
                        amount: 0
                    }

                    axios.post("http://localhost:5000/goaltrackeritem/add", newData)

                }

            } else if (this.state.goalSetterDays < response.data.length) {

                // remove unneeded GoalTrackerItems

                const difference = response.data.length - this.state.goalSetterDays

                for (var i = 0; i < difference; i++) {

                    axios.delete("http://localhost:5000/goaltrackeritem/" + response.data[response.data.length-1 - i]._id)

                }

            }

            // Finally, load GoalTrackerItems
            
            const savedGoalTrackerItems = []
            for (var i = 0; i < response.data.length; i++) {
                savedGoalTrackerItems.push(<GoalTrackerItem key={i} goalTrackerItemID={i} day={response.data[i].day} amount={response.data[i].amount} onChangeDay={this.onChangeDay} onChangeAmount={this.onChangeAmount} />)
            }

            this.setState({
                goalTrackerItems: savedGoalTrackerItems
            })

        })

    }

    render() {
        return (

            <div>

                <p>To reach {this.state.goalSetterAmount} pushups in {this.state.goalSetterDays} days, do {this.state.goalSetterAmount / this.state.goalSetterDays} per day</p>
                
                <form onSubmit={this.onSubmitForm}>

                    {this.state.goalTrackerItems}

                    <input type="submit" value="SAVE" />

                </form>

            </div>

        )
    }

    onChangeDay = (event, goalTrackerItemID) => {

        const newDay = event.target.value

        this.setState(oldState => ({
            goalTrackerItems: oldState.goalTrackerItems.map(oldGoalTrackerItem => <GoalTrackerItem key={oldGoalTrackerItem.props.goalTrackerItemID} goalTrackerItemID={oldGoalTrackerItem.props.goalTrackerItemID} day={oldGoalTrackerItem.props.goalTrackerItemID === goalTrackerItemID ? newDay : oldGoalTrackerItem.props.day} amount={oldGoalTrackerItem.props.amount} onChangeDay={this.onChangeDay} onChangeAmount={this.onChangeAmount} />)
        }))

    }

    onChangeAmount = (event, goalTrackerItemID) => {

        const newAmount = event.target.value

        this.setState(oldState => ({
            goalTrackerItems: oldState.goalTrackerItems.map(oldGoalTrackerItem => <GoalTrackerItem key={oldGoalTrackerItem.props.goalTrackerItemID} goalTrackerItemID={oldGoalTrackerItem.props.goalTrackerItemID} day={oldGoalTrackerItem.props.day} amount={oldGoalTrackerItem.props.goalTrackerItemID === goalTrackerItemID ? newAmount : oldGoalTrackerItem.props.amount} onChangeDay={this.onChangeDay} onChangeAmount={this.onChangeAmount} />)
        }))

    }

    onSubmitForm = (event) => {

        event.preventDefault()

    }

}

export default GoalTracker