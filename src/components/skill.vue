<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe604;</span>专业技能 (Skill)</h4>
        </div>
        <div class='panel'>
            {{ skill.join(', ') }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['skill']
    }
</script>