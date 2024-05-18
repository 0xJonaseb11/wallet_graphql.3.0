import React, { useEffect, useState } from 'react';

import logo from "./assets/ball_golden.jpeg";
import { ExampleQueryDocument, ExampleQueryQuery, execute } from "../../client/schema.graphql";

function App() {
  const [result, setResult] = useState<ExampleQueryQuery | null>(null);

  useEffect(() => {
    execute(ExampleQueryDocument, {}).then((result) => {
      setResult(result?.data ?? null);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client Example</p>
        <fieldset>
          {result && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(result, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  );
}

export default App;
