import React from 'react';

class DuxLogo extends React.Component {
  render() {
    return (
      <div>
        <svg viewBox="0 0 40 100" id="dux-logo">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="dux-logo-child"
                d="M18,84.73v73.54l-9-9V93.73l9-9M27,63,0,90v63l27,27V63Z"
              />

              <path
                className="dux-logo-child"
                d="M45,22l9,9,.06,118.27-9.05,9V22M35.94,180,63,153V27L36,0"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default DuxLogo;
