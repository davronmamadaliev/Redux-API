import './styles/PostStyle.css'
import Post from "./pages/post/Post";
import User from "./pages/user/User";
import {Link, Route, Switch} from "react-router-dom";


function App() {
    return (
        <div className={'container'}>
            <div className="row mt-2">
                <div className="col-md-12">
                   <button className={'btn btn-outline-success'}><Link to={'/posts'}>Posts</Link></button>
                    <button className={'btn btn-outline-success mx-2'}><Link to={'/users'}>Users</Link></button>
                    <Switch>
                        <Route path={'/posts'} component={Post}/>
                        <Route path={'/users'} component={User}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
