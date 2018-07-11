import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import graphql, { MockedProvider } from 'react-apollo/test-utils';
import gql from 'apollo-boost';
import { mount, configure } from 'enzyme';
import JobRequestForm from '../AdminForms/AdminJobRequestForm';
import { GET_ALL_SCHOOLS } from '../../../queries/jobFormQueries';

configure({adapter: new Adapter()});

let wrapper;
let mocks;

// beforeEach( async () => {

// })

// afterEach(() => {
//   wrapper.unmount();
// })

it('should query graphql', () => {
  mocks = [
    {request: {GET_ALL_SCHOOLS}}
  ]
  wrapper = mount(
    <MockedProvider mocks={mocks}>
      <JobRequestForm/>
    </MockedProvider>
  );
  await new Promise(resolve => setTimeout(resolve));
  wrapper.update()
  console.log(wrapper.state())
  console.log(wrapper.prop())
  console.log(wrapper.props())

  expect(wrapper).toContain(<div>loading</div>);
})