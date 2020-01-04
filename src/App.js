import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialAppReducer } from "./reducer";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

function App() {
  const [state, dispatch] = React.useReducer(appReducer, initialAppReducer);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/results">Results</Link>
        </nav> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
