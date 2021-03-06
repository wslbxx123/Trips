import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Trips } from '../components/Trip/Trips'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

const { mount } = Enzyme

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    getAllTrips: jest.fn(),
    trips: {
      loading: false
    }
  };

  const enzymeWrapper = mount(<Trips {...props}/>);

  return {
    props,
    enzymeWrapper
  };
}

describe('<Trips />', function () {
  it('render correctly', () => {
    const {wrapper, props} = setup()
    const getSpy = jest.spyOn(props, 'getAllTrips');
    expect(getSpy).toBeCalled();
  })
})

test('load and display as snapshot', async() => {
  const props = {
    getAllTrips: jest.fn(),
    trips: {
      loading: false
    }
  };
  const { asFragment } = render(<Trips {...props}/>)

  expect(asFragment()).toMatchSnapshot()
})