import {
  VuexModule,
  Module,
  action,
  getter,
  mutation
} from 'vuex-class-component'

interface Counter {
  value: number
}

@Module({ namespacedPath: 'modules/counter/', target: 'nuxt' })
export class CounterStore extends VuexModule implements Counter {
  @getter value = 0

  @mutation
  public SET_VALUE(value: number) {
    this.value = value
  }

  @action()
  public increment(value: number) {
    this.SET_VALUE(this.value + value)
  }

  @action()
  public decrement(value: number) {
    this.SET_VALUE(this.value - value)
  }
}

export default CounterStore.ExtractVuexModule(CounterStore)
