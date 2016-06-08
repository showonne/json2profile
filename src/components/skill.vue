<template>
    <div class='title'>
        <h4><span class='icon-font'>&#xe604;</span>专业技能 (skill)</h4>
    </div>
    <div class='panel'>
        {{ skill.join(', ') }}
    </div>
</template>

<script>
    export default {
        props: ['skill']
    }
</script>