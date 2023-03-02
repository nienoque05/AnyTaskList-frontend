import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";

export default function Routes(){
  return(
    <Switch>
    <Route exact  path="/" component={Home} />
    <Route exact path="/create" component={AddTask} />
   </Switch>
  )
}