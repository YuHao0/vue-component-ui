<template>
    <div>
        <cz-button @click="handleClick" handleClick="handleClick" :disabled="false">默认按钮</cz-button>
        <cz-button @click="handleClick" handleClick="handleClick" :disabled="true">不可点击</cz-button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick: function(){
                console.log('click button');
            }
        }
    }
</script>
<style></style>
