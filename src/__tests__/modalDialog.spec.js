import ModalDialog from '../components/ModalDialog.vue'
import { mount } from '@vue/test-utils'

describe('ModalDialog', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof ModalDialog.data).toBe('function')
    })
  })

  describe('Mounted ModalDialog', () => {
    const wrapper = mount(ModalDialog);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    test('should render button', async () => {
        const wrapper = mount(ModalDialog)     
        await wrapper.setProps({
          show: true
        })
        expect(wrapper.find('button').exists()).toBe(true)
      })

      test('should render text', async () => {
        const wrapper = mount(ModalDialog)     
        await wrapper.setProps({
          show: true
        })
        expect(wrapper.text()).toMatch(/default header/)
      })
      
  })