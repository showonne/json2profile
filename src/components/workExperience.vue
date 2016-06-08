<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe61a;</span>工作经历 (work experience)</h4>
        </div>
        <div class='panel'>
            <div class='item' v-for='info in work_experience'>
                <div class='basic_info'>
                    <span>{{ info.duration }}</span>
                    <span>{{ info.company }}</span>
                    <span>{{ info.position }}</span>
                </div>
                <ul>
                    <li class='detail' v-for='item in info.detail'>{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['work_experience']
    }
</script>

<style lang='stylus' scoped>
    .panel
        .item
            margin-bottom: 20px
            .basic_info
                margin-bottom: 10px
                span
                    line-height: 1.5
                    &:not(:first-child)
                        margin-left: 30px
            .detail
                margin: 4px
    
</style>