import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Testing <GifGridItem> component.', ()=> {
  const title = 'my title';
  const url = 'https://rodwyn.com/icon.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  const image = wrapper.find('img');

  test('Should render the component correctly.', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  test('Should paragraph contains a correct title.', () => {
    const paragraph = wrapper.find('p');
    expect(paragraph.text().trim()).toBe(title);
  });

  test('Should have the same src vale.', () => {
    expect(image.prop('src')).toBe(url);
  })

  test('Should have the same alt title.', () => {
    expect(image.prop('alt')).toBe(title);
  });


  test('Should have the class name animate__bounceIn.', ()=>{
    const div = wrapper.find('div');
    expect(div.prop('className')).toContain('animate__bounceIn');
  });
});