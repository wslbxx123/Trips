import reducer from '../reducers/tripReducers'
import * as actions from '../actions/tripActions'

describe('trip reducers', () => {
    it('return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                loading: false,
                hasError: false,
                error: null,
                data: []
            }
        )
    })

    it('handle GET_ALL_TRIPS_REQUEST', () => {
        expect(
            reducer({}, {
                type: actions.GET_ALL_TRIPS_REQUEST
            })
        ).toEqual({
            loading: true
        })

        expect(
            reducer(
            {
                data: "fetchData",
                loading: false
            }, 
            {
                type: actions.GET_ALL_TRIPS_REQUEST
            })
        ).toEqual({
            data: "fetchData",
            loading: true
        })
    })

    it('handle GET_ALL_TRIPS_SUCCESS', () => {
        expect(
            reducer({
                loading: true
            }, {
                type: actions.GET_ALL_TRIPS_SUCCESS,
                payload: "data"
            })
        ).toEqual({
            loading: false,
            hasError: false,
            data: "data"
        })
    })

    it('handle GET_ALL_TRIPS_ERROR', () => {
        expect(
            reducer({
                loading: true
            }, {
                type: actions.GET_ALL_TRIPS_ERROR,
                payload: "error message"
            })
        ).toEqual({
            loading: false,
            hasError: true,
            error: "error message"
        })
    })
})