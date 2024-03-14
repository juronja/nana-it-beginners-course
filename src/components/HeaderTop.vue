<script>
export default {
    name: "HeaderTop",
    props: {
        title: String,
        buttoncta: String,
        titleColor: String
    },
    methods: {
        handleClick() {
            console.log("Clicked have I button")
        }
    }
}
</script>
<template>
    <header>
        <div class="container">
            <h1 :style="{ color: titleColor}">{{ title }}</h1> <!-- property definition {{  }} -->
            <button @click="handleClick">{{ buttoncta }}</button> <!-- handle clicks -->
        </div>
    </header>
</template>

<style>

</style>