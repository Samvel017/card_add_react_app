import React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function ColorEdit({ setColor, setActive, active }) {
  const handleClickAway = () => {
    setActive('');
  };

  const styles = {
    position: 'absolute',
    top: 0,
    right: 0,
    left: '50%',
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
    width: 'max-content',
    transform: 'translateX(-50%)'
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button
          className="step-btn"
          onClick={() => {
            setActive('polishing');
          }}
        ></button>
        {active === 'polishing' ? (
          <Box sx={styles}>
            <div className="color-edit">
              <div className="default-colors">
                <button
                  className="color"
                  onClick={() => {
                    setColor('red');
                  }}
                ></button>
                <button
                  className="color"
                  onClick={() => {
                    setColor('#545662');
                  }}
                ></button>
                <button
                  className="color"
                  onClick={() => {
                    setColor('darkblue');
                  }}
                ></button>
                <button
                  className="color"
                  onClick={() => {
                    setColor('green');
                  }}
                ></button>
              </div>
              <div className="color-select">
                <input
                  type="color"
                  onChange={(e) => {
                    setColor(`${e.target.value}`);
                  }}
                />
              </div>
            </div>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
