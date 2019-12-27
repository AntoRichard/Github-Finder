import React from 'react';
import FoodItems from './FoodList/FoodItems';
import Navbar from '../Utils/Navbar';

const Home = ({ addCardHandler, data }) => {
  return (
    <div>
      <Navbar show="1" />
      <h1>Indian Foodssss</h1>
      <div>
        <FoodItems addCardHandler={addCardHandler} data={data} />
      </div>
    </div>
  );
};

export default Home;
