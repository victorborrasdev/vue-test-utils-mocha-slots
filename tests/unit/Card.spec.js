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

  it('renders HTML slots', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<strong>Hello</strong>',
        body: '<a href="#">World</a>'
      }
    })
    expect(wrapper.html()).to.include('<strong>Hello</strong>')
    expect(wrapper.html()).to.include('<a href="#">World</a>')
  })
})
