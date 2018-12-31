import React from 'react';
import { Enzyme, shallow, mount } from 'enzyme';
import Carousel from '../src/components/RestaurantPhotos.jsx'

describe('<Modal />', () => {
  it('should not display a Modal window on load', () => {
    const wrapper = shallow(<RestaurantPhotos />)
    expect(wrapper.find(Modal).length).toEqual(0);
  })

  it('should open a photo Modal window when clicked on', () => {
    const wrapper = shallow(<Modal />);
    wrapper.find(img).simulate('click');
    expect(wrapper.find(ReactModal).prop('isOpen')).toEqual(true);
  });
});
