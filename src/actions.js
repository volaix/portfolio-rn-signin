import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import getPeople from './api'

export const getData = () => {
  return {
    type: FETCHING_DATA
  }
}

export const getDataSuccess = (data) => {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export const getDataFailure = (err) => {
  return {
    type: FETCHING_DATA_FAILURE,
    err,
  }
}

//thunks returns a function rather than just an action
export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData())

    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => {
        dispatch(getDataFailure(err))
        console.log('err:', err)
      })
  }
}
