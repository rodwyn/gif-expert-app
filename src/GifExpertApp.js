import React, { useState } from 'react';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Gorillaz', 'Deftones', 'The Chemical Brothers' ]);
  const handleAdd = () => {
    setCategories(['Radiohead', ...categories]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

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