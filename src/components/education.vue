<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe63c;</span>教育背景 (Education)</h4>
        </div>
        <div class='panel'>
            <div class='basic'>
                <span>{{ education.duration }}</span>
                <span>{{ education.univercity }}</span>
                <span>{{ education.major }}</span>
            </div>
            <div class='courses'>
                <h5>主修课程:</h5>
                {{ education.majorCourses.join(', ') }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['education']
    }
</script>

<style lang='stylus' scoped>
    .panel
        .basic
            display: flex
            justify-content: space-between
        span
            font-size: 20px
        .courses
            h5
                margin: 1em
</style>