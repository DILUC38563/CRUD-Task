
import { Link, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import { Brands} from "./Brands";
import { Users } from './Users';
import AppBar from '@material-ui/core/AppBar';
import { INITIAL_USER_LIST} from "./INITIAL_USER_LIST";

function App(){
  return(
    <div> 
      <AppBar position = "static">
        <nav>
          <Link to = "/">Home</Link> 
          <Link to = "/brands">Brands</Link>
          <Link to = "/users">Users</Link>
        </nav>
      </AppBar>
        <Switch>

        <Route path = "/brands">
          <Brands />
        </Route>

        <Route path = "/users/:userid">
          <UserDetails  />
        </Route>

        <Route path = "/users">
          <Users />
        </Route>

        <Route path = "/">
          <Home />
        </Route>

      </Switch>
    </div>
  ) 
}

function Home(){
  return (
    <div className = "home">
      <h2>Welcome to shop!!</h2>
    </div>
  )
}

function UserDetails(){
  const {userid} = useParams()
  const user = INITIAL_USER_LIST.find((user) => user.id === +userid)
  console.log({userid})
      return (
    <div className = "user-detail">
      <h2>User Details: {userid}</h2>
      <h2>User Details: {user.name}</h2>
      <h2>User Details: {user.details}</h2>
    </div>
  )
}


export default App;
