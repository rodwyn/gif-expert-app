import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Testing the <GifExpertApp /> component.', ()=>{
  test('Should render the component correctly.', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render a category list.', () => {
    const categories = ['gorillaz', 'radiohead'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
});