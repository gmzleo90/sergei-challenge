//import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import BoostrapNavbar from './components/BoostrapNavbar';
import DataTable from './components/DataTable';
import BoostrapForm from "./components/BoostrapForm";


function App() {

  return (
    <div className="App">
      <BoostrapNavbar />
      <Routes>
        <Route path='view-table' element={<DataTable />} />
        <Route path='view-form' element={<BoostrapForm />} />
      </Routes>
    </div>
  );
}
export default App;
