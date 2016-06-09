<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe70d;</span>校园经历 (School Experience)</h4>
        </div>
        <div>
            <p v-for='info in school_experience'>{{ info }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['school_experience']
    }
</script>