import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Trips } from '../components/Trip/Trips'
import axios from './__mocks__/axios';

const { mount } = Enzyme

Enzyme.configure({ adapter: new Adapter() })
jest.mock('axios');

describe('<Trips />', function () {
  it('render correctly', () => {
    const getSpy = jest.spyOn(axios, 'get');
    let wrapper = mount(<Trips />)
    expect(getSpy).toBeCalled();
  })
})