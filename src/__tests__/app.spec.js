import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof App.data).toBe('function')
    })
  })

  describe('Mounted App', () => {
    const wrapper = mount(App);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    // it's also easy to check for the existence of elements
it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('updates text', async () => {
    const wrapper = mount(App)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('Add')
  })

  

  })

  