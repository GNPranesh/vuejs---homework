import { mount } from '@vue/test-utils'
import BaseComp from '../components/BaseComp.vue'

describe('BaseComp', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof BaseComp.data).toBe('function')
    })
  })

  describe('Mounted BaseComp', () => {
    const wrapper = mount(BaseComp);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })
    it('updates text', async () => {
        const wrapper = mount(BaseComp)
        expect(wrapper.text()).toContain('Title')
      })
  })