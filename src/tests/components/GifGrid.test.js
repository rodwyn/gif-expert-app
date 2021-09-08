import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('Testing the <GifGrid /> component.', () => {
  
  test('Should render the component correctly.', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true 
    });

    const wrapper = shallow(<GifGrid category='gorillaz' />);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Should render items when useFetchGifs get images.', () => {
    const gifs = [{
      id: '123-a-456',
      url: 'rodwyn.com/sad.gif',
      title: 'a sad gif'
    },{
      id: '123-a-457',
      url: 'rodwyn.com/happy.gif',
      title: 'a happy gif'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category='gorillaz' />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
})
