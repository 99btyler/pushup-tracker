import React from "react"
import axios from "axios"

import GoalsViewerItem from "./GoalsViewerItem.js"

class GoalsViewer extends React.Component {

    state = {
        goalsViewerItems: []
    }

    componentDidMount() {

        axios.get("http://localhost:5000/goals").then(response => {

            const savedGoalsViewerItems = []
            for (var i = 0; i < response.data.length; i++) {
                savedGoalsViewerItems.push(<GoalsViewerItem key={i} _id={response.data[i]._id} amount={response.data[i].amount} days={response.data[i].days} />)
            }

            this.setState({
                goalsViewerItems: savedGoalsViewerItems
            })

        }).catch(error => console.log("Error: " + error))

    }

    render() {
        return (

            <div>
                {this.state.goalsViewerItems}
            </div>

        )
    }

}

export default GoalsViewer