import { withRouter } from "react-router-dom";
import Button from "./Button";
import Textbox from "./Textbox";
import Input from "./Input";

function UiMatcher({ match }) {
  if (match.params.name === "button") {
    return <Button />;
  } else if (match.params.name === "text") {
    return <Textbox />;
  } else if (match.params.name === "box") {
    return <Input />;
  } else {
    return (
      <>
        <div>없어요. 없다구요.</div>
      </>
    );
  }
}

export default withRouter(UiMatcher);
