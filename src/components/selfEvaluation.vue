<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe62a;</span>自我评价 (Self Evaluation)</h4>
        </div>
        <div>
            <p>{{ self_evaluation }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['self_evaluation']
    }
</script>