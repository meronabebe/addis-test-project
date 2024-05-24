import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const EditSongForm = () => {
  const { id } = useParams();
  const song = useSelector(state => state.songs.find(song => song.id === Number(id)));
  const [title, setTitle] = useState(song?.title || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_SONG_REQUEST', payload: { id: Number(id), title } });
    navigate('/');
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '600px' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '16px' }}>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            marginBottom: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            color: '#fff',
            background: '#2980b9',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditSongForm;
