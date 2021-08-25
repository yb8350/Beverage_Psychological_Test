import { Link, Switch, Route } from "react-router-dom";
import UiMatcher from "./components/UiMatcher";

function App() {
  const style = {
    textDecoration: "none",
    fontSize: "25px",
    display: "inline-block",
    backgroundColor: "skyblue",
    textAlign: "center",
    borderRadius: "10px",
    width: "100px",
    height: "100%",
    padding: "5px",
    margin: "5px",
    color: "white",
    fontWeight: "600",
  };
  return (
    <>
      <div>
        <Link to="/ui/button" style={style}>
          버튼
        </Link>
        &nbsp;
        <Link to="/ui/text" style={style}>
          텍스트
        </Link>
        &nbsp;
        <Link to="/ui/box" style={style}>
          박스
        </Link>
        &nbsp;
      </div>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <UiMatcher props={props} />}
          ></Route>
          <Route
            path="/ui/:name"
            render={(props) => <UiMatcher props={props} />}
          ></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
