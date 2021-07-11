import { BrowserRouter, Route } from "react-router-dom";

import GoalCreator from "./components/GoalCreator.js"
import GoalEditor from "./components/GoalEditor.js"
import GoalsViewer from "./components/GoalsViewer/GoalsViewer.js"
import Navbar from "./components/Navbar.js"

const PushupTracker = () => {
    return (

        <BrowserRouter>

            <Navbar />

            <Route exact path="/" component={GoalsViewer} />
            <Route path="/create" component={GoalCreator} />
            <Route path="/edit/:id" component={GoalEditor} />

        </BrowserRouter>

    )
}

export default PushupTracker