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
  })