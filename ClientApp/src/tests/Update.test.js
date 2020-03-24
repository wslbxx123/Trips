import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Update } from '../components/Trip/Update'
import axios from './__mocks__/axios';

const { shallow, mount } = Enzyme

Enzyme.configure({ adapter: new Adapter() })
jest.mock('axios');

axios.get = jest.fn(() => Promise.resolve({
  'code': 200,
  'data': {
    "id":1,
    "name":"Vienna, Austria",
    "description":"Vienna, is one the most beautiful cities in Austria and in Europe as well. Other than the Operas for which it is well known, Vienna also has many beautiful parks...",
    "dateStarted":"2017-01-20T00:00:00",
    "dateCompleted":null
  }
}));

describe('<Update />', function () {
  it('render correctly', function () {
    const getSpy = jest.spyOn(axios, 'get');
    let wrapper = shallow(<Update match={{params: {id: 1}}}/>)
    expect(getSpy).toBeCalled();
  })
})