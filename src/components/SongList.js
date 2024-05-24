import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SongList = () => {
  const songs = useSelector(state => state.songs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_SONG_REQUEST', payload: { id } });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '600px' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '16px' }}>Song List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {songs.map(song => (
          <li key={song.id} style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>{song.title}</span>
            <div>
              <button><Link to={`/edit/${song.id}`} style={{ marginRight: '8px' }}>Edit</Link></button>
              <button onClick={() => handleDelete(song.id)} style={{ color: 'red' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add" style={{
        display: 'block',
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        color: '#fff',
        background: '#2980b9',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '4px',
      }}>Add New Song</Link>
    </div>
  );
};

export default SongList;
