<template>
  <table id="BaseComp">
    <thead>
      <tr>
        <th></th>
        <th  @click="sortList('id')">Id &#8597;</th>
        <th @click="sortList('title')">Title &#8597;</th>
        <th @click="sortList('content')">Content &#8597;</th>
        <th @click="sortList('status')">Status &#8597;</th>
      </tr>
    </thead>

    <tbody>
      <tr v-bind:key="row.length" v-for="row in testData">
        <td class="tbldata">
          <input
            class="checkbx"
            type="checkbox"
            @click="setCheckbox(row.id)"
            id="{{row.id}}"
          />
        </td>
        <td>{{ row.id }}</td>
        <td>{{ row.title }}</td>
        <td>{{ row.content }}</td>
        <td>{{ row.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const STORAGE_KEY = "test_app";
//console.log(this.testData)
export default {
  props: ["testData"],

  name: "BaseComp",
  data() {
    console.log("base component", this.testData);
    return {
      rows: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
      showAlert: false,
      checkedId: [],
    };
  },
  methods: {
    setCheckbox(e) {
      this.showAlert = true;
      this.checkedId = e;
      this.$emit("select", this.showAlert, this.checkedId);
    },
    sortList (e){
    this.$emit("sortId", e);
  }
  },
  
};
</script>
<style>
.checkbx {
  width: 10%;
  border-radius: 30px;
}

.tbldata {
  text-align: center;
}
th {
    cursor: pointer;
}

table {
  font-family: "Open Sans", sans-serif;
  width: 95%;
  border-collapse: collapse;
  border: 3px solid #6b6c77;
  margin-top: 10px;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #606162;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: center;
  padding: 8px;
  border-right: 1px solid #7d82a8;
  border-bottom: 1px solid #7d82a8;
}

table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
