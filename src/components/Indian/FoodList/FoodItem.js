import React, { useState } from 'react';

const FoodItem = ({ title, image, addCardHandler, val }) => {
  console.log(val);
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState('hidden');
  const [valueVis, setValueVis] = useState('hidden');
  const style = {
    card: {
      padding: '10px',
      paddingLeft: '40px',
      border: '1px solid #ccc',
      margin: '10px',
      boxShadow: '5px 7px #eee'
    },
    input: {
      width: '12px',
      padding: '3px 15px',
      margin: '0px 7px'
    },
    minus: {
      backgroundColor: '#fff',
      color: 'red',
      padding: '3px 10px',
      fontWeight: '900',
      fontSize: '12px',
      borderRadius: '3px',
      border: '1px solid red'
    },
    add: {
      backgroundColor: '#fff',
      color: 'green',
      padding: '3px 10px',
      fontWeight: '900',
      fontSize: '12px',
      borderRadius: '3px',
      border: '1px solid green'
    },
    p: { float: 'right', marginTop: '1px', visibility: { valueVis } }
  };

  const addOne = () => {
    setValue(value + 1);
    setVisible('visible');
  };
  const removeOne = () => {
    if (value > 0) {
      setValue(value - 1);
    }
    if (value < 2) {
      setVisible('hidden');
    }
  };
  const update = value => setValueVis('visible');
  return (
    <div style={style.card}>
      <img
        src={image}
        alt=""
        height="200"
        width="350"
        style={{ borderRadius: '6px' }}
      />
      <p style={{ fontSize: '20px', fontWeight: '700' }}>{title}</p>
      <div>
        <button onClick={removeOne} style={style.minus}>
          -
        </button>
        <input type="text" value={value} style={style.input} />
        <button onClick={addOne} style={style.add}>
          +
        </button>
        <p style={style.p}> {val} Added</p>
        <button
          style={{
            visibility: visible,
            marginLeft: '140px',
            padding: '5px 15px',
            color: 'orange',
            backgroundColor: '#fff',
            borderRadius: '3px',
            border: '1px solid orange'
          }}
          onClick={() => {
            addCardHandler(title, value);
            update(value);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
