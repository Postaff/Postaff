import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import AdminLandingCurrentStatus from '../AdminLanding/AdminLandingCurrentStatus.jsx';

configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
  wrapper = mount(<AdminLandingCurrentStatus/>);
  console.log(wrapper.text())
})

afterEach(() => {
  wrapper.unmount();
})

it('renders current status component', () => {
  expect(wrapper.find('Typography').length).toEqual(3)
})

it('should contains unclaimed and claim data', () => {
  expect(wrapper.text()).toContainEqual('Current StatusUnclaimed JobsClaimed Jobs')
})