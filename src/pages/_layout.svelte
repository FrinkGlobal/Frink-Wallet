<script>
    import Navigation from './../Blocks/Navigation/Navigation.svelte';
</script>

<div class="w-screen h-screen p-2 bg-white">
    <div class="wrapper w-full h-full bg-color p-2 flex">
        <Navigation />
        <main class="flex-1 overflow-scroll">
            <slot />
        </main>
    </div>
</div>

<style>
    .wrapper {
        border-radius: 30px;
    }
</style>
