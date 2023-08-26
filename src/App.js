import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Hotel_Items/Card';
import ReservationForm from './components/Form/ReservationForm';
import Body from '../src/components/Base/Body';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Body} />
        <Route path="/menu" Component={Card} />
        <Route path="/form" Component={ReservationForm} />
      </Routes>
      <h1>Hiii Disha</h1>
      </>
  );
}

export default App;