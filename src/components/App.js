import React from "react";
import AppShell from "./AppShell";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home";
import Text from "./screens/Text";
import Words from "./screens/Words";

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/text" component={Text} />
            <Route exact path="/word" component={Words} />
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
