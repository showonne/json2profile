<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe616;</span>个人信息 (Personal Info)</h4>
        </div>
        <div class='panel'>
            <div class='photo' v-if='photo'>
                <img  src='../header.jpg' />
            </div>
            <div class='infos' v-for='item in basic'>
                <label>{{ item.des }}: </label>
                <span>{{ item.val }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['basic', 'photo']
    }
</script>

<style lang='stylus' scoped>
    .panel
        display: flex
        flex-flow: row wrap
        position: relative
        .infos
            width: 50%
            margin: 4px 0
            label
                font-size: 20px
            span
                font-size: 20px
        .photo
            height: 100px
            width: 100px
            position: absolute
            right: 0
            top: -80px
            border-radius: 50%
            overflow: hidden
            img
                max-width: 100%
                max-height: 100%

</style>