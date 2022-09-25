<template>
    <div v-if="display" class="notificationRoot">
        <div class="textStyle">
            <p class="NotificationText">Do you want to delete this note?</p>
        </div>
        <div class="buttonsConfirmation">
            <button @click="resetAlert" class="btnStyle">No</button>
        </div>
        <div class="btnstyleYes">
            <button class="btnStyle" @click="$emit('removeData')">Yes</button>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        display: Boolean
    },
    data() {
        return {
            display1: true,
checkboxData:''
        }
    },
    methods:{
        resetAlert(){
            this.display1=false;
            this.$emit('select', this.display1,this.checkboxData)
        }
    }
}
</script>

<style>
.NotificationText {
    color: #FFF;
    padding-left: 30px;
}

.btnStyle {
    color: red;
    font-family: 'Open Sans', sans-serif;
    margin-left: 45px;
    padding: 5px;
    width: 60%;
}

.btnStyle:hover {
    background: red;
    border-width: .1px;
    color: #FFF;
    border-color: #FFF;
}

.btnstyleYes {
    display: flex;

    align-items: center;
    float: right;
    flex-grow: 4;
}

.notificationRoot {
    background: red;
    position: fixed;
    z-index: 9998;
    bottom: 50px;
    right: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #FFF;
    width: 40%;
}

.buttonsConfirmation {
    display: flex;
    align-items: center;
    float: right;
    flex-grow: 4;
}
</style>