import React, { useState } from 'react';
import sketch from '../Images/Icons copy.png';
import design from '../Images/Group 1404.png';
import dfile from '../Images/Group 1403.png';
import rand from '../Images/outline.png';
import anim from '../Images/Group.png';
import polish from '../Images/outline.svg';
import Main from './Main';
import ColorEdit from './ColorEdit';

export default function Home({ color, setColor, setOpen, uploadImages, removeCard }) {
  const [active, setActive] = useState('');
  return (
    <div className="home" style={{ backgroundColor: color }}>
      <div className="home-section">
        <h2 className="home-title">Processes</h2>
        <div className="process-section">
          <div className="buttons">
            <div className="step">
              <img src={sketch} alt="" />
              <button className="step-btn"></button>
              <span>Idea Sketch</span>
            </div>
            <div className="step">
              <img src={design} alt="" />
              <button className="step-btn"></button>
              <span>Design</span>
            </div>
            <div className="step">
              <img src={dfile} alt="" />
              <button className="step-btn"></button>
              <span>3D File</span>
            </div>
            <div className="step">
              <img src={rand} alt="" />
              <button className="step-btn"></button>
              <span>Rand</span>
            </div>
            <div className="step">
              <img src={anim} alt="" />
              <button className="step-btn"></button>
              <span>Animation</span>
            </div>
            <div className="step">
              <img src={polish} alt="" />
              <ColorEdit setColor={setColor} setActive={setActive} active={active}/>
              <span>Polishing</span>
            </div>
            <button className="complete-step-btn">✔</button>
          </div>
          <div className="process"></div>
        </div>
        <div className="footer-section">
          <button
            className="add-btn"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add
          </button>
        </div>
      </div>
      <Main uploadImages={uploadImages} removeCard={removeCard}/>
    </div>
  );
}
