import EvokeUI from "../evoke-ui";
import Login from "./Login";

export default class Component extends EvokeUI.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h3>Component Flow</h3>
        <Login message={"Test Component"}/>
      </div>
    );
  }
}
