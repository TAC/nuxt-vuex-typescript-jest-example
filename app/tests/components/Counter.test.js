import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { createLocalVue, mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import counter from '@/store/modules/counter.ts'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/Counter.vue', () => {
  let wrapper
  const initValue = 10
  beforeEach(() => {
    // create store
    const store = new Vuex.Store({
      'modules': {
        'modules/counter': cloneDeep(counter)
      }
    })

    // initialize store
    store.commit('modules/counter/SET_VALUE', initValue)

    // mount Vue Component
    wrapper = mount(Counter, {
      store: store,
      localVue
    })
  })

  describe('template', () => {
    test('snapshot correctly', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('script', () => {
    test('get counter value correctly', () => {
      expect(wrapper.vm.counter).toBe(initValue)
    })
    test('increment button correctly', () => {
      wrapper.find('[name="increment"]').trigger('click')
      expect(wrapper.vm.counter).toBe(initValue + 1)
    })
    test('decrement button correctly', () => {
      wrapper.find('[name="decrement"]').trigger('click')
      expect(wrapper.vm.counter).toBe(initValue - 1)
    })
  })
})
