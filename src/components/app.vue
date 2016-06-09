<template>
    <div class='container'>
        <div class='header_bar'><div class="cube"></div></div>
        <basic :basic='profileInfo.basic' :photo='profileInfo.photo'></basic>
        <education :education='profileInfo.education'></education>
        <work-experience :work_experience='profileInfo.workExperience'></work-experience>
        <school-experience :school_experience='profileInfo.schoolExperience'></school-experience>
        <skill :skill='profileInfo.skill'></skill>
        <prize-info :prize_info='profileInfo.prizeInfo'></prize-info>
        <self-evaluation :self_evaluation='profileInfo.selfEvaluation'></self-evaluation>
        <div class='footer_bar'><span>powered by <a  target='blank' href="https://github.com/showonne/json2profile">json2profile</a></span><div class="cube"></div></div>
    </div>
</template>

<script>
    import basic from './basic.vue'
    import education from './education.vue'
    import workExperience from './workExperience.vue'
    import schoolExperience from './schoolExperience.vue'
    import skill from './skill.vue'
    import selfEvaluation from './selfEvaluation.vue'
    import prizeInfo from './prizeInfo.vue'

    const profileInfo = require('../profile.json')

    export default {
        el: '#app',
        data () {
            return {
                profileInfo: profileInfo
            }
        },
        components: {
            basic, education, workExperience, schoolExperience, skill, selfEvaluation, prizeInfo
        }
    }
</script>

<style lang='stylus'>
    .container
        width: 75%
        margin: 0 auto
        padding: 20px 0
        overflow: hidden
        @media screen and (max-width: 768px)
            width: 100%
    .header_bar
        height: 30px
        width: 100%
        background: #254667
        .cube
            background: #fff
            height: 30px
            width: 2%
            margin-left: 2%
    .footer_bar
        height: 30px
        width: 100%
        background: #254667
        margin-top: 30px
        position: relative
        span
            position: absolute
            color: #fff
            left: 50%
            top: 50%
            transform: translate3d(-50%, -50%, 0)
            font-weight: 100
            font-family: -apple-system, 'Helvetica Neue', Arial
            font-size: 18px
            @media screen and (max-width: 768px)
                font-size: 14px
        a
            color: #fff
        .cube
            background: #fff
            height: 30px
            width: 2%
            margin-left: 96%
</style>