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

    test('should render text', async () => {
        const wrapper = mount(NotificationBox)     
        await wrapper.setProps({
          display: true
        })
        expect(wrapper.text()).toMatch(/Do you want to delete this note?/)
      })
      test('should render button', async () => {
        const wrapper = mount(NotificationBox)     
        await wrapper.setProps({
          display: true
        })
        expect(wrapper.find('button').exists()).toBe(true)
      })
  })