<script lang="ts">
    import unsplash from "$lib/unsplash";
    import Photolist from "$lib/photolist.svelte";
    let searchTerm = "";
    let results = [];
    async function search(term:string){
        const res = await unsplash.get(`/search/photos?query=${term}`);
        let result = res.data.results;
        return result;
    }
    async function triggerSearch() {
        console.log(searchTerm);
        
        results = await search(searchTerm);
    }
</script>

<div class="h-screen flex flex-col pt-10 space-y-5 items-center ">
    <form class="w-2/3  flex flex-col  border-[1px]  shadow-lg rounded-lg px-2 py-3" on:submit|preventDefault={triggerSearch}>
        <p class="m-1 mt-0 text-xl text-gray-700 font-semibold">Search Images</p>
        <input type="text" class="border-2 rounded-lg p-2 focus:outline-none focus:border-blue-400" bind:value={searchTerm} placeholder="example-  Dogs, Cats" />
        <p class="m-1 mt-0 text-lg text-gray-700 font-medium">Powered by <span class="text-blue-600">Unsplash</span> </p>
    </form>
    <div class="md:w-2/4">
        <Photolist list={results}/>
    </div>
</div>
