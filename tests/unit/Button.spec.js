import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders plain text slots', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'click me',
      }
    })
    expect(wrapper.html()).to.include('click me')
  })
})
