<template>
  <div class="root">
    <div class="report">
      <span
        >Total
        <h1>{{ (num4 = num1 + num2 + num3) }}</h1>
      </span>
      <span
        >Completed
        <h1>
          {{ num1 }}
        </h1>
      </span>
      <span
        >Not Completed
        <h1>
          {{ num2 + num3 }}
        </h1>
      </span>
      <span> </span>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
// var completed = this.testData.find((i) => i.id === "COMPLETED");
// var inProgress = this.testData.find((i) => i.id === "IN PROGRESS");
// var todo = this.testData.find((i) => i.id === "TO DO");

export default {
  props: ["testData","num1","num2","num3"],
  name: "TitleHeader",

  data() {
    return {
      num4: 0,
    };
  }
};
</script>

<style>
.root {
  display: flex;
  flex-direction: row;
}

.report {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 120px;
  flex-grow: 2;
  border: 1px solid #7d82a8;
  background-color: #e0dede;
  color: #646464;
  text-transform: uppercase;
  align-items: center;
}

.empty {
  display: flex;
  flex-grow: 3;
}

span {
  display: flex;
  flex-direction: column;
}
</style>
