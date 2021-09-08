import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
  const {data,loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounceInLeft">{category}</h3>
      { loading && <p>Loading</p> }
      <div className="card-grid">  
        {
          data.map(
            img => 
              <GifGridItem key={img.id} {...img} />
          )
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
