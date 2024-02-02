
import './App.css';
import CustomerPage from './pages/CustomerPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import Login from './pages/login';
import RequestEvent from './pages/RequestEvent';
import EventList from './pages/EventList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CustomerPage />} />
        <Route path="/requestevent" element={<RequestEvent />} />
        {/* <Route path="/editEvent" element={<EditEvent />} /> */}
        <Route path="/eventList" element={ <EventList/>} />
        
      </Routes>
    </BrowserRouter>
  //   <div className="App">
  //  <CustomerPage/>
  //   </div>
  );
}

export default App;
