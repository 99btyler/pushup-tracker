import React from "react"

import GoalSetter from "./components/GoalSetter.js"
import GoalTracker from "./components/GoalTracker.js"

class PushupTracker extends React.Component {

    state = {
        // ...
    }

    render() {
        return (

            <div>
                <GoalSetter />
                <GoalTracker />
            </div>

        )
    }

}

export default PushupTracker