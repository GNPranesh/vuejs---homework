<template>
  <TitleHeaderVue
    v-bind:testData="updatedData"
    :num1="number1"
    :num2="number2"
    :num3="number3"
  ></TitleHeaderVue>
  <BaseComp
    v-bind:testData="updatedData"
    :key="componentKey"
    @select="setNotification"
    :checkedNames="checkboxId"
  >
  </BaseComp>
  <button
    class="btn"
    id="show-modal"
    @click="showModal = true"
    @testData="setData(testData)"
  >
    Add
  </button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ModalDialog :show="showModal" @close="setData">
      <template #header>
        <h3>Add Note</h3>
      </template>
    </ModalDialog>
  </Teleport>
  <NotificationBoxVue
    :key="componentKey"
    :display="showAlert"
    @select="removeNotification"
    @removeData="removeSelectedData"
  ></NotificationBoxVue>
</template>

<script>
import BaseComp from "./components/BaseComp.vue";
import TitleHeaderVue from "./components/TitleHeader.vue";
import ModalDialog from "./components/ModalDialog.vue";
import NotificationBoxVue from "./components/NotificationBox.vue";

const STORAGE_KEY = "test_app";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
      showAlert: false,
      updatedData: [
        {
          id: 0,
          title: "Mock data",
          content: "THIS DATA WILL GET OVERWRITTEN",
          status: "COMPLETED",
        },
        {
          id: 0,
          title: "Mock data",
          content: "THIS DATA WILL GET OVERWRITTEN",
          status: "IN PROGRESS",
        },
        {
          id: 0,
          title: "Mock data",
          content: "THIS DATA WILL GET OVERWRITTEN",
          status: "TO DO",
        },
      ],
      number1: 1,
      number2: 1,
      number3: 1,
      numObj1: [],
      numObj2: [],
      numObj3: [],
      componentKey: 0,
      componentKeyAlert: 0,
      checkboxId: [],
    };
  },
  components: {
    TitleHeaderVue,
    BaseComp,
    ModalDialog,
    NotificationBoxVue,
  },
  methods: {
    setData(e) {
      this.updatedData = Object.assign(this.updatedData,e)
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.updatedData));
      this.showModal = false;
      this.componentKey += 1;
      this.numObj1 = this.updatedData.filter((i) => i.status === "COMPLETED");
      this.number1 = this.numObj1.length;

      this.numObj2 = this.updatedData.filter((i) => i.status === "IN PROGRESS");
      this.number2 = this.numObj2.length;

      this.numObj3 = this.updatedData.filter((i) => i.status === "TO DO");
      this.number3 = this.numObj3.length;
    },
    setNotification(e, data) {
      this.showAlert = e;
      this.checkboxId = data;
      this.componentKeyAlert += 1;
    },
    removeNotification(e, data) {
      this.showAlert = e;
      this.checkboxId = data;
      console.log("checkbox id", this.checkboxId);
    },
    removeSelectedData() {
      this.showAlert = false;
      let index = this.updatedData.findIndex((i) => i.id === this.checkboxId);
      this.updatedData.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.updatedData));
    },
  },
};
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
  font-family: "Open Sans", sans-serif;
  width: 10%;
  float: right;
  margin: 15px 65px 0 15px;
  padding: 8px;
  background: #44475c;

  color: #fff;
  text-transform: uppercase;
  border-radius: 8px;
}

.btn:hover {
  background: #474e83;
}
</style>
