import React from 'react'

const Slider = ({ name, min, max, value, handleChange }) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        name=""
        id=""
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p className>{name} Value : {value}</p>
    </div>
  )
}


export default Slider