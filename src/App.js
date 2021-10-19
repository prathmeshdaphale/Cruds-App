import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import Home from "./components/Home";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path= "/" component= {Home} />
          <Route path= "/create" component= {CreateEmployee} />
          <Route path= "/update/:id" component= {UpdateEmployee} />
          <Route path= "/details/:id" component= {EmployeeDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
