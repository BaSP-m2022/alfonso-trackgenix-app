import React from 'react';
import styles from './slider.module.css';

const Slider = ({
  idNameAndValue,
  isChecked,
  onChangeFunction,
  arg1,
  arg2,
  backgroundHeight,
  backgroundWidth,
  switchHeight,
  switchWidth
}) => {
  return (
    <label className={styles.switch} style={{ width: backgroundWidth, height: backgroundHeight }}>
      <input
        type="checkbox"
        id={idNameAndValue}
        name={idNameAndValue}
        value={idNameAndValue}
        checked={isChecked === true ? true : false}
        onChange={() => onChangeFunction(arg1, arg2)}
      />
      <span className={styles.slider} style={{ height: switchHeight, width: switchWidth }} />
    </label>
  );
};

export default Slider;
