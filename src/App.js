import "./App.css";
import { Route, Switch } from "react-router-dom";
import Standings from "./components/StandingDetails";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import LeagueDetails from "./components/LeagueDetails";
import Seasons from "./components/Seasons";
import LeaguesList from "./components/LeaguesList";
import SeasonDetails from "./components/SeasonDetails";
import StandingDetails from "./components/StandingDetails";
import TeamInfo from "./components/TeamInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        {/* <Home /> */}
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <LeaguesList {...props} />}
          />
          <Route
            exact
            path="/LeagueDetails/:league"
            component={(props) => <LeagueDetails {...props} />}
          />
          <Route
            exact
            path="/Seasons/:league"
            component={(props) => <Seasons {...props} />}
          />
          <Route
            exact
            path="/SeasonDetails/:league"
            component={(props) => <SeasonDetails {...props} />}
          />
          <Route
            exact
            path="/Standings/:league"
            component={(props) => <Standings {...props} />}
          />
          <Route
            exact
            path="/StandingDetails/:league"
            component={(props) => <StandingDetails {...props} />}
          />
          <Route
            exact
            path="/TeamInfo/:league"
            component={(props) => <TeamInfo {...props} />}
          />

          <Route component={(props) => <NotFound {...props} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
