import React from 'react';
import './App.css';
import { DefaultLayaut } from "./layout/DefaultLayout";
//import { Dashboard } from './pages/dashboard/Dashboard.page';

//import {Entry} from "./pages/entry/Entry.page";
import {AddTicket} from "./pages/new-ticket/AddTicket.page";

function App() {
  return (
    <div className="App">
      {/*<Entry /> */}
      <DefaultLayaut>
        {/*< Dashboard />*/}
        <AddTicket />
      </DefaultLayaut>
    </div>
  );
}

export default App;
