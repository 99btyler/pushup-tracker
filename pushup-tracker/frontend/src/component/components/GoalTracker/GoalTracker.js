import React from "react";
import axios from "axios";

import GoalTrackerItem from "./GoalTrackerItem.js"

class GoalTracker extends React.Component {

    state = {
        goalTrackerItems: []
    }

    componentDidMount() {

        axios.get("http://localhost:5000/goaltrackeritem").then(response => {

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

            <form onSubmit={this.onSubmitForm}>

                {this.state.goalTrackerItems}

                <input type="submit" value="SAVE" />
                
            </form>

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