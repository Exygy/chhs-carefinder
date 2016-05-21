import _ from 'lodash'
import _inflection from 'lodash-inflection'

_.mixin(_inflection)
_.retitleize = (str = '') => _.titleize(str.toLowerCase())

export default _
