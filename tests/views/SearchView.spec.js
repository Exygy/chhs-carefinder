import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { StickyContainer } from 'react-sticky'
// our components
import { INITIAL_STATE as FACILITIES_INITIAL_STATE } from 'redux/modules/facilities'
import { FacilitySearchBox } from 'components/FacilitySearchBox'
import { SearchView } from 'views/SearchView'

// setup mock store and mock data
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
  facilities: FACILITIES_INITIAL_STATE
}
const store = mockStore(initialState)
const fakeFacilities = [
  {"county_name":"RIVERSIDE","facility_address":"1131 W. 6TH STREET, SUITE 110","facility_administrator":"TERI AMIRKHAN","facility_capacity":"55","facility_city":"ONTARIO","facility_name":"FUTURO INFANTIL HISPANO","facility_number":"337804341","facility_state":"CA","facility_status":"LICENSED","facility_telephone_number":"(909) 460-1138","facility_type":"FOSTER FAMILY AGENCY SUB","facility_zip":"91762","license_first_date":"2003-07-02T00:00:00.000","licensee":"FUTURO INFANTIL HISPANO, F.F.A.","location":{"type":"Point","coordinates":[-117.67147,34.085175]},"location_address":"1131 W. 6TH STREET, SUITE 110","location_city":"ONTARIO","location_state":"CA","location_zip":"91762","regional_office":"19"},{"county_name":"RIVERSIDE","facility_address":"27393 YNEZ RD., STE. 254","facility_administrator":"MADRIGAL, LOUIS","facility_capacity":"1","facility_city":"TEMECULA","facility_name":"INDIAN CHILD WELFARE CONSORTIUM","facility_number":"336426775","facility_state":"CA","facility_status":"LICENSED","facility_telephone_number":"(951) 676-3382","facility_type":"FOSTER FAMILY AGENCY","facility_zip":"92591","license_first_date":"2015-05-01T00:00:00.000","licensee":"MADRIGAL, LOUIS","location":{"type":"Point","coordinates":[-117.15033,33.506995]},"location_address":"27393 YNEZ RD., STE. 254","location_city":"TEMECULA","location_state":"CA","location_zip":"92591","regional_office":"19"}
]

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(
    <Provider store={store}>
      <SearchView {...props} />
    </Provider>
  )
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<SearchView {...props} />)
}

describe('(Component) SearchView', function () {
  // create mock googleMaps stub
  window.google = {
    maps: {
      Geocoder: () => {},
      places: {
        Autocomplete: () => {},
        AutocompleteService: () => {},
      }
    }
  }
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      routes: [],
      facilities: fakeFacilities,
      searchQuery: '',
      ...bindActionCreators({
        getFacilities: (_spies.getFacilities = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <StickyContainer>.', function () {
    expect(_component.type).to.equal(StickyContainer)
  })

  it('Should render child components.', function () {
    const wrapper = mount(
      <Provider store={store}>
        <SearchView {..._props} />
      </Provider>
    )

    expect(wrapper).to.have.descendants(StickyContainer)
    expect(wrapper).to.have.descendants(FacilitySearchBox)
  })

  it('Should call redux functions on mount.', function () {
    _spies.getFacilities.should.have.been.called
  })

  describe('Facility search results should render <SearchResultCard>...', function () {
    let cards

    beforeEach(() => {
      cards = TestUtils.scryRenderedDOMComponentsWithClass(_rendered, 'search-card')
    })

    it('Should include a <SearchResultCard> for each facility.', function () {
      expect(cards.length).to.equal(2)
    })

    it('<SearchResultCard> should include facility_name.', function () {
      expect(cards[0].textContent).to.match(RegExp(fakeFacilities[0].facility_name))
    })

  })

})
