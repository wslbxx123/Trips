import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import { Delete } from '../components/Trip/Delete'
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

describe('<Delete />', function () {
  it('calls axios when mounting', function () {
    const getSpy = jest.spyOn(axios, 'get');
    let wrapper = mount(<Delete match={{params: {id: 1}}}/>);
    expect(getSpy).toBeCalled();
  })

  it('renders two buttons correctly', function () {
    let wrapper = shallow(<Delete match={{params: {id: 1}}}/>);
    expect(wrapper.find('button').length).toBe(2);
  })

  it('calls onCancel when clicking cancel button', () => {
    const onCancel = sinon.spy(Delete.prototype, 'onCancel');
    const wrapper = mount(<Delete match={{params: {id: 1}}} history={{push: jest.fn()}}/>);
    wrapper.find('button.btn-default').simulate('click');
    expect(onCancel.callCount).toBe(1);
  })

  it('calls onConfirmation when clicking confirm button', () => {
    const onConfirmation = sinon.spy(Delete.prototype, 'onConfirmation');
    const wrapper = mount(<Delete match={{params: {id: 1}}} history={{push: jest.fn()}}/>);
    wrapper.find('button.btn-danger').simulate('click');
    expect(onConfirmation.callCount).toBe(1);
  })
})