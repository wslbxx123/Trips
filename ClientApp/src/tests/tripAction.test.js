import React from 'react'
import * as actions from '../actions/tripActions'
import axios from './__mocks__/axios';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('axios');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('create an action to get all trips', () => {

        var data = [{
            "id":1,
            "name":"Vienna, Austria",
            "description":"Vienna, is one the most beautiful cities in Austria and in Europe as well. Other than the Operas for which it is well known, Vienna also has many beautiful parks...",
            "dateStarted":"2017-01-20T00:00:00",
            "dateCompleted":null
        },
        {
            "id":2,
            "name":"Carpinteria, CA, USA",
            "description":"Carpinteria is a city located on the central coast of California, just south of Santa Barbara. It has many beautiful beaches as well as a popular Avocado Festival which takes place every year in October...",
            "dateStarted":"2019-02-22T00:00:00",
            "dateCompleted":"2019-01-30T00:00:00"
        }];

        const expectedActions = [
            { type: actions.GET_ALL_TRIPS_REQUEST },
            { type: actions.GET_ALL_TRIPS_SUCCESS, payload: data }
          ]

        const store = mockStore({ trips: []})

        return store.dispatch(actions.getAllTrips()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})