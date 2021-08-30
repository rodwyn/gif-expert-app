import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Gorillaz', 'Deftones', 'The Chemical Brothers' ]);
  // const handleAdd = () => {
  //   setCategories(['Radiohead', ...categories]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory />
      <hr />

      

      <ol>
        {
          categories.map(category => {
            return <li key={category}>
              {category}
            </li>
          })
        }
      </ol>
    </>
  );
};

export default GiftExpertApp;