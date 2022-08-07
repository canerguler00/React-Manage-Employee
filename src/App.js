import EmployeeList from "./components/EmployeeList";
import EmployeeTextProvider from './context/EmployeeContext'


function App() {
  return (
    <div className="App">

<div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">		
      <EmployeeTextProvider >
        <EmployeeList />
      </EmployeeTextProvider>
      
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
