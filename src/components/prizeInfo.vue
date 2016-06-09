<template>
    <div>
        <div class='title'>
            <h4><span class='icon-font'>&#xe62a;</span>获奖情况 (Prize info)</h4>
        </div>
        <div class='panel'>
            <ul>
                <li v-for='info in prize_info'>{{ info }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['prize_info']
    }
</script>