<template>
    <div class="root">
        <div class="report">
            <span>Total
                <h1>{{numbers.num3 = numbers.num1 + numbers.num2}} </h1>
            </span>
            <span>Completed
                <h1>
                    {{numbers.num1 }}
                </h1>
            </span>
            <span>Not Completed
                <h1>
                    {{numbers.num2}}
                </h1>
            </span>
            <span> </span>
        </div>
        <div class="empty"></div>
    </div>
</template>

<script>
export default {
    name: 'TitleHeader',
    data() {
        return {
            numbers:
                { num1: 10, num2: 8, num3: 0 }
        }
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
    border: 1px solid #7D82A8;
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