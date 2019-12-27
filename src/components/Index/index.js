import React from 'react';
import Image from '../../Images/Italian.jpg';
import Chinese from '../../Images/chinese.jpg';
import Indian from '../../Images/indian.jpeg';
import Navbar from '../Utils/Navbar';
import { Link } from 'react-router-dom';
const index = () => {
  const style = {
    pTag: {
      fontSize: '18px',
      fontWeight: '700'
    },
    img: {
      borderRadius: '6px'
    }
  };
  return (
    <div>
      <Navbar background="transparent" />
      <img
        src={Image}
        alt=""
        style={{ height: '100vh', width: '100%', zIndex: '1' }}
      />
      <div
        style={{
          height: '100vh',
          width: '100%'
        }}
      >
        <h1 style={{ paddingTop: '150px', textAlign: 'center' }}>Food Items</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            paddingLeft: '50px',
            marginTop: '30px'
          }}
        >
          <div>
            <img
              src={Chinese}
              alt=""
              height="250"
              width="400"
              style={style.img}
            />
            <p style={style.pTag}>Chinese</p>
          </div>
          <div>
            <Link to="/indian-food">
              <img
                src={Indian}
                alt=""
                height="250"
                width="400"
                style={style.img}
              />
            </Link>
            <p style={style.pTag}>Indian</p>
          </div>
          <div>
            <img
              src={Image}
              alt=""
              height="250"
              width="400"
              style={style.img}
            />
            <p style={style.pTag}>Italian</p>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            bottom: '0',
            backgroundColor: '#000',
            width: '100%',
            color: '#fff',
            marginTop: '260px'
          }}
        >
          <h1
            style={{
              marginLeft: '5%',
              textAlign: 'center',
              backgroundColor: '#000'
            }}
          >
            Developed By FoodCart
          </h1>
        </div>
      </div>
    </div>
  );
};

export default index;
