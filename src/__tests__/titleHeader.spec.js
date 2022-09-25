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

    test('should render text', async () => {
        const wrapper = mount(TitleHeader)     
        // await wrapper.setProps({
        //   show: true
        // })
        expect(wrapper.text()).toMatch(/Completed/)
      })

      test('should render text', async () => {
        const wrapper = mount(TitleHeader)     
        // await wrapper.setProps({
        //   show: true
        // })
        expect(wrapper.text()).toMatch(/Total/)
      })

      test('should render text', async () => {
        const wrapper = mount(TitleHeader)     
        // await wrapper.setProps({
        //   show: true
        // })
        expect(wrapper.text()).toMatch(/Not Completed/)
      })

      test('should render text', async () => {
        const wrapper = mount(TitleHeader)     
        await wrapper.setProps({
          num1: 1,
          num2:1,
          num3:1
        })
        expect(wrapper.text()).toMatch(/3/)
      })
  })