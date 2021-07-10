import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import GoalSetter from "./components/GoalSetter.js"
import GoalTracker from "./components/GoalTracker/GoalTracker.js"

class PushupTracker extends React.Component {

    render() {
        return (

            <BrowserRouter>

                <Route path="/set" component={GoalSetter} />
                <Route path="/track" component={GoalTracker} />

            </BrowserRouter>

        )
    }

}

export default PushupTracker