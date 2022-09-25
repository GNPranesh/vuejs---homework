import NotificationBox from '../components/NotificationBox.vue'
import { mount } from '@vue/test-utils'

describe('NotificationBox', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof NotificationBox.data).toBe('function')
    })
  })

  describe('Mounted NotificationBox', () => {
    const wrapper = mount(NotificationBox);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })