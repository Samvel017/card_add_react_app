import React from 'react';
import { ImageUpload } from './ImageUpload';

export default function Modal({
  open,
  setOpen,
  images,
  setImages,
  addCard,
  title,
  setTitle,
}) {
  return (
    <div className={open ? 'open modal' : 'modal'}>
      <div className="modal-content">
        <ImageUpload images={images} setImages={setImages} />
        <label>
          <h3>Title</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <button
          className="save-btn"
          onClick={() => {
            addCard({ img: images[0].data_url, title: title });
          }}
        >
          Save
        </button>
      </div>

      <button
        className="modal-close"
        onClick={() => {
          setOpen(false);
        }}
      >
        X
      </button>
    </div>
  );
}
