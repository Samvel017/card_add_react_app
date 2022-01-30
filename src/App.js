import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './Components/Home';
import Modal from './Components/Modal';

function App() {
  const [active, setActive] = useState('studio');
  const [color, setColor] = useState('#545662');
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [uploadImages, setUploadImages] = useState([])
  const [title, setTitle] = useState('');

  const removeCard = (id) =>{
    const array = [...uploadImages]
    setUploadImages(array.filter((el,index)=>{
      return index !== id
    }))
  }

  const addCard = (el) => {
    if (title !== '' && images[0].data_url !== '') {
      setUploadImages((prev)=>{
        return [
          ...prev, 
          el
        ]
      })
      setOpen(false)
      setImages([])
      setTitle('')
    }
    else {
      alert('Empty title or image not uploaded!')
    }
  };

  return (
    <div className="App">
      <nav>
        <NavLink
          to="/"
          style={{ backgroundColor: active === 'studio' ? color : '#383a45' }}
          onClick={() => {
            setActive('studio');
          }}
        >
          3D Studio
        </NavLink>
        <NavLink
          to="/production"
          style={{
            backgroundColor: active === 'production' ? color : '#383a45',
          }}
          onClick={() => {
            setActive('production');
          }}
        >
          Production
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home removeCard={removeCard} color={color} setColor={setColor} setOpen={setOpen} uploadImages={uploadImages} />}
        />
      </Routes>
      <Modal
        open={open}
        setOpen={setOpen}
        images={images}
        setImages={setImages}
        addCard={addCard}
        title={title}
        setTitle={setTitle}
      />
    </div>
  );
}

export default App;
