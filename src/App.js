import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import AddSongForm from './components/AddSongForm';
import EditSongForm from './components/EditSongForm';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/add" element={<AddSongForm />} />
        <Route path="/edit/:id" element={<EditSongForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>

    </div>
  );
}

export default App;
