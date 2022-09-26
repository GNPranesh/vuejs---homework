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
    @sortId="sortData"
  >
  </BaseComp>
  <button
    class="btn"
    id="show-modal"
    @click="loadModal"
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
          id: 1,
          title: "Initial Data",
          content: "This is the initial data hard coded",
          status: "COMPLETED",
        }
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
      sortedbyASC: true,
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
    },
    removeSelectedData() {
      this.showAlert = false;
      let index = this.updatedData.findIndex((i) => i.id === this.checkboxId);
      this.updatedData.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.updatedData));
    },
    loadModal(){
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.updatedData));
      this.showModal = true;
    },
    sortData(e) {
     if (this.sortedbyASC) {
        this.updatedData.sort((x, y) => (x[e] > y[e] ? -1 : 1));
        this.sortedbyASC = false;
      } else {
        this.updatedData.sort((x, y) => (x[e] < y[e] ? -1 : 1));
        this.sortedbyASC = true;
      }
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
button{
  cursor: pointer;
}
.btn:hover {
  background: #474e83;
}
</style>
