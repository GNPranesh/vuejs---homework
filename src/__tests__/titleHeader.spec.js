import TitleHeader from '../components/TitleHeader.vue'
import { mount } from '@vue/test-utils'

describe('TitleHeader', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof TitleHeader.data).toBe('function')
    })
  })

  describe('Mounted TitleHeader', () => {
    const wrapper = mount(TitleHeader);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })