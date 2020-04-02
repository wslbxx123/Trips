import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import { Create } from '../components/Trip/Create'
import axios from './__mocks__/axios';

const { shallow, mount } = Enzyme

Enzyme.configure({ adapter: new Adapter() })

jest.mock('axios');

describe('<Create />', () => {
  it('renders two text inputs correctly', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find({type: "text"}).length).toBe(2);
  })

  it('renders two date inputs correctly', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find({type: "date"}).length).toBe(2);
  })

  it('renders a submit button correctly', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find({type: "submit"}).length).toBe(1);
  })

  it('renders title when passed in', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.contains(<h3>Add new trip</h3>)).toBeTruthy();
  })

  it('the first child of form has class form-group', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('form').childAt(0).props().className).toBe('form-group');
  })

  it('calls onChangeName when changing name', () => {
    const onChangeName = sinon.spy(Create.prototype, 'onChangeName');
    const wrapper = mount(<Create />);
    wrapper.find({type: "text"}).at(0).simulate('change');
    expect(onChangeName.callCount).toBe(1);
  })

  it('calls onChangeDescription when changing description', () => {
    const onChangeDescription = jest.spyOn(Create.prototype, 'onChangeDescription');
    const wrapper = mount(<Create />);
    wrapper.find({type: "text"}).at(1).simulate('change');
    expect(onChangeDescription).toBeCalled();
  })

  it('calls onChangeDateStarted when changing started date', () => {
    const onChangeDateStarted = jest.spyOn(Create.prototype, 'onChangeDateStarted');
    const wrapper = mount(<Create />);
    wrapper.find({type: "date"}).at(0).simulate('change');
    expect(onChangeDateStarted).toBeCalled();
  })

  it('calls onChangeDateCompleted when changing completed date', () => {
    const onChangeDateCompleted = jest.spyOn(Create.prototype, 'onChangeDateCompleted');
    const wrapper = mount(<Create />);
    wrapper.find({type: "date"}).at(1).simulate('change');
    expect(onChangeDateCompleted).toBeCalled();
  })

  it('calls onSubmit when submiting form', () => {
    const onSubmit = jest.spyOn(Create.prototype, 'onSubmit');
    const axiosPost = jest.spyOn(axios, "post");
    const wrapper = mount(<Create history={{push: jest.fn()}}/>);
    wrapper.find('form').simulate('submit');
    expect(axiosPost).toBeCalled();
    expect(onSubmit).toBeCalled();
  })
})