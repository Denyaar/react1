import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVIsibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVIsibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVIsibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
