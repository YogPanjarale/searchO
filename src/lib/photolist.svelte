<script lang="ts">
    export let list;
    import Imagecard from "./imagecard.svelte";
</script>
<div class="flex flex-row flex-wrap justify-between space-y-2">
    {#each list as item}
    <Imagecard photo={item}/>
    {/each}
</div>