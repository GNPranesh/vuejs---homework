import { mount } from '@vue/test-utils'
import BaseComp from '../components/BaseComp.vue'
import sinon from 'sinon'

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

    //   it('Click on yes button calls id method with argument "id"', async () => {
    //     const wrapper = mount(BaseComp)
    //     const sortList = jest.fn()
    //     await wrapper.find('th').trigger('click')
    //            expect(sortList).toBeCalled('0')
    //   })
  })