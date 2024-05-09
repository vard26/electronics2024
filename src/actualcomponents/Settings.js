import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
export default function Settings() {
  const setting_colors = [
      '#0e4f9b',
      '#296e26',
      '#af291d',
      '#e51c7b',
      '#fa5b0e',
      '#1d1d1d',
  ];
  const [actualColor, setActualColor] = useState('#0e4f9b');
  const [openSet, setOpenSet] = useState(false);
  const [size,setSize] = useState(0);

  useEffect(() => {
    if(localStorage.getItem('col') !== null) {
      document.querySelector(':root').style.setProperty('--bg', localStorage.getItem('col'));
    }
    setSize(document.querySelector('.settings_container').offsetWidth);
  });


  window.onclick = (e) => {
    if(e.target.tagName !== 'svg') {
      setOpenSet(false);
    }
  }

  return (
    <div className="settings_container" style={{left : openSet ? null : -size + 'px'}}>
        <FaCog onClick={() => {
            setOpenSet(!openSet);
        }}/>
        {setting_colors.map(set => {
            return <div className="settings_color" key={set} style={{background : set}}onClick={() => {
                setActualColor(set);
                setOpenSet(false);
                localStorage.setItem('col', set);
            }}></div>
        })}
    </div>
  )
}