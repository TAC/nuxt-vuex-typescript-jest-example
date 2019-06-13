import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import counter from '@/store/modules/counter.ts'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/modules/counter.ts', () => {
  let store
  const initValue = 10
  beforeEach(() => {
    // create store
    store = new Vuex.Store({
      'modules': {
        'modules/counter': cloneDeep(counter)
      }
    })

    // initialize store
    store.commit('modules/counter/SET_VALUE', initValue)
  })

  describe('getters', () => {
    test('get value correctly', () => {
      expect(store.getters['modules/counter/value']).toBe(initValue)
    })
  })

  describe('actions', () => {
    test('increment correctly', () => {
      const addValue = 1
      store.dispatch('modules/counter/increment', addValue)
      expect(store.getters['modules/counter/value']).toBe(initValue + addValue)
    })
    test('decrement correctly', () => {
      const subValue = 1
      store.dispatch('modules/counter/decrement', subValue)
      expect(store.getters['modules/counter/value']).toBe(initValue - subValue)
    })
  })
})
