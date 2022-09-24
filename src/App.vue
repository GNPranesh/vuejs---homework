<template>
  <TitleHeaderVue></TitleHeaderVue>
  <BaseComp v-bind:testData="updatedData" :key="componentKey" @select="setNotification" :checkedNames="checkboxId"></BaseComp>
  <button class="btn" id="show-modal" @click="showModal = true" @testData="setData(testData)">Add</button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ModalDialog :show="showModal" @close="setData">
      <template #header>
        <h3>Add Note</h3>
      </template>
    </ModalDialog>
  </Teleport>
  <NotificationBoxVue :key="componentKey" :display="showAlert"  @select="removeNotification"></NotificationBoxVue>
</template>

<script>
import BaseComp from './components/BaseComp.vue';
import TitleHeaderVue from './components/TitleHeader.vue';
import ModalDialog from './components/ModalDialog.vue';
import NotificationBoxVue from './components/NotificationBox.vue';

export default {  
  name: 'App',
  data() {
    return {
      showModal: false,
      showAlert: false,
      updatedData: [{ id: 0, title: "Mock data", content: "pls add original data", status: "this will be removed when u add" }],
      componentKey: 0,
      componentKeyAlert: 0,
      checkboxId: []
    }
  },
  components: {
    TitleHeaderVue,
    BaseComp,
    ModalDialog,
    NotificationBoxVue
  },
  methods: {
    setData(e) {
      this.updatedData = e;
      console.log("apppp", this.updatedData)
      this.showModal = false;
      this.componentKey += 1;
    },
    setNotification(e, data) {
      this.showAlert = e
      this.checkboxId = data
      this.componentKeyAlert += 1;
      console.log("checkbox id", this.checkboxId)
    },
    removeNotification(e, data) {
      this.showAlert = e
      this.checkboxId = data
      console.log("checkbox id", this.checkboxId)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 80vh;
  margin: 50px;
}

.btn {
  font-family: 'Open Sans', sans-serif;
  width: 10%;
  float: right;
  margin: 15px 65px 0 15px;
  padding: 8px;
  background: #44475C;

  color: #FFF;
  text-transform: uppercase;
  border-radius: 8px;
}

.btn:hover {
  background: #474e83;
}
</style>
