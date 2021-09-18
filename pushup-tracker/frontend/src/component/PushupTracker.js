import { BrowserRouter, Route } from "react-router-dom"

import Navigator from "./components/Navigator.js"
import UsersAdder from "./components/user/UsersAdder.js"
import UsersEditor from "./components/user/edit/UsersEditor.js"
import UsersGetter from "./components/user/UsersGetter.js"

const PushupTracker = () => {
    return (

        <div id="pushup-tracker">
            
            <BrowserRouter>
            
                <Navigator />

                <Route exact path="/" component={UsersGetter} />
                <Route path="/add" component={UsersAdder} />
                <Route path="/edit/:id" component={UsersEditor} />

            </BrowserRouter>

        </div>

    )
}

export default PushupTracker