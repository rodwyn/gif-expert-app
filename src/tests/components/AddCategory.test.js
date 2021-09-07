import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Testing the <AddCategory /> component.', ()=>{
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(()=>{
    jest.clearAllMocks;
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Should render the component correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should change the input text value.', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: {
        value: 'new category'
      }
    });
  })
  
  test('Should not post information on submit if value is empty.', () => {
    wrapper.find('form').simulate('submit', {preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should call set categories function and clean input text value.', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: {
        value: 'new category'
      }
    });
    wrapper.find('form').simulate('submit', {preventDefault(){}});
    input.simulate('change', {
      target: {
        value: ''
      }
    });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  })
  
  
});