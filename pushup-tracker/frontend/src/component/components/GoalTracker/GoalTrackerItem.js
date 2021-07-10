import React from "react";

class GoalTrackerItem extends React.Component {

    render() {
        return (

            <div>
                <input type="text" value={this.props.day} onChange={(event) => this.props.onChangeDay(event, this.props.goalTrackerItemID)} />
                <input type="text" value={this.props.amount} onChange={(event) => this.props.onChangeAmount(event, this.props.goalTrackerItemID)} />
            </div>

        )
    }

}

export default GoalTrackerItem