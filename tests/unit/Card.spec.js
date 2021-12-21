import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
  it('renders plain text slots', () => {
    const wrapper = mount(Card, {
      slots: {
        header: 'Hello',
        body: 'World'
      }
    })
    expect(wrapper.html()).to.include('Hello')
    expect(wrapper.html()).to.include('World')
  })
})
