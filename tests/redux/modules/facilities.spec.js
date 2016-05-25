import {
  getFacilities,
  setFacilityGeoSearch,
  setFacilitySearchQuery,
  facilitiesLoad,
  INITIAL_STATE,
  default as facilitiesReducer
} from 'redux/modules/facilities'

describe('(Redux Module) Facilities', function () {
  describe('(Reducer)', function () {
    it('Should be a function.', function () {
      expect(facilitiesReducer).to.be.a('function')
    })

    it('Should initialize with the correct initial state.', function () {
      expect(facilitiesReducer(INITIAL_STATE, {})).to.equal(INITIAL_STATE)
    })

    it('Should return the previous state if an action was not matched.', function () {
      let state = facilitiesReducer(INITIAL_STATE, {})
      expect(state).to.equal(INITIAL_STATE)
      state = facilitiesReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(INITIAL_STATE)
      let fakeResults = [{},{},{}]
      state = facilitiesReducer(state, facilitiesLoad(fakeResults))
      expect(state.results).to.equal(fakeResults)
      state = facilitiesReducer(state, {type: '@@@@@@@'})
      expect(state.results).to.equal(fakeResults)
    })
  })

  describe('(Action Creator) setFacilityGeoSearch', function () {
    it('Should be exported as a function.', function () {
      expect(setFacilityGeoSearch).to.be.a('function')
    })

    it('Should return an action with proper type "SET_FACILITY_GEO_SEARCH" and payload.', function () {
      expect(setFacilityGeoSearch('')).to.deep.equal({
        type: 'SET_FACILITY_GEO_SEARCH',
        payload: ''
      })
    })
  })

  describe('(Action Creator) getFacilities', function () {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(function () {
      _globalState = {
        facilities: facilitiesReducer(INITIAL_STATE, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          facilities: facilitiesReducer(_globalState.results, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', function () {
      expect(getFacilities).to.be.a('function')
    })

    it('Should return a function (is a thunk).', function () {
      expect(getFacilities()).to.be.a('function')
    })

    // it('Should return a promise from that thunk that gets fulfilled.', function () {
    //   return getFacilities()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    // })
    //
    // it('Should call dispatch and getState exactly once.', function () {
    //   return getFacilities()(_dispatchSpy, _getStateSpy)
    //     .then(() => {
    //       _dispatchSpy.should.have.been.calledOnce
    //       _getStateSpy.should.have.been.calledOnce
    //     })
    // })
    //
    // it('Should produce a state that is double the previous state.', function () {
    //   _globalState = { counter: 2 }
    //
    //   return doubleAsync()(_dispatchSpy, _getStateSpy)
    //     .then(() => {
    //       _dispatchSpy.should.have.been.calledOnce
    //       _getStateSpy.should.have.been.calledOnce
    //       expect(_globalState.counter).to.equal(4)
    //       return doubleAsync()(_dispatchSpy, _getStateSpy)
    //     })
    //     .then(() => {
    //       _dispatchSpy.should.have.been.calledTwice
    //       _getStateSpy.should.have.been.calledTwice
    //       expect(_globalState.counter).to.equal(8)
    //     })
    // })
  })

})
