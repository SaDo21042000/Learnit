import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";

import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import About from "./views/About";

import ProtectedRoute from "./components/routing/ProtectedRoute";
import PostContextProvide from "./contexts/PostContext";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvide>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>

            <Route
              exact
              path="/login"
              render={(props) => <Auth {...props} authRoute="login" />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Auth {...props} authRoute="register" />}
            />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/about" component={About} />
          </Switch>
        </Router>
      </PostContextProvide>
    </AuthContextProvider>
  );
}

export default App;
