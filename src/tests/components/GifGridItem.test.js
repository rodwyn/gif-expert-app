import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Testing <GifGridItem> component.', ()=> {
  const title = 'my title';
  const url = 'https://rodwyn.com/icon.jpg';

  test('Should render the component correctly.', ()=>{
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});