import React, { useEffect } from 'react'
// ...
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import { ExampleQueryDocument, ExampleQueryQuery, execute } from '../.graphclient'
 
function App() {
 const [result, setResult] = React.useState<ExampleQueryQuery>();
 
 useEffect(() => {
   execute(ExampleQueryDocument, {}).then((result) => {
     setData(result?.data)
   })
 }, [setResult])
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>Graph Client Example</p>
       <fieldset>
         {data && (
           <form>
             <label>Data</label>
             <br />
             <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
           </form>
         )}
       </fieldset>
     </header>
   </div>
 )
}
 
export default App