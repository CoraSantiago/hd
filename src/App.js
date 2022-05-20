import React from 'react';
import './App.css';
import { DefaultLayaut } from "./layout/DefaultLayout";
import { Dashboard } from './pages/dashboard/Dashboard.page';

import {Entry} from "./pages/entry/Entry.page";

function App() {
  return (
    <div className="App">
      {/*<Entry /> */}
      <DefaultLayaut>
        <Dashboard />
      </DefaultLayaut>
    </div>
  );
}

export default App;
