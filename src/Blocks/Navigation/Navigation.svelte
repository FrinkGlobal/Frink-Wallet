<script>
    import NavLink from './NavLink.svelte';
    import Logo from './Logo.svelte';
    import links from '../../utils/navigation';
</script>

<div class="h-full in-sh overflow-hidden mr-2">
    <Logo />
    <ul>
        {#each links as [path, name, iconName] (path)}
            <NavLink {path} {name} {iconName} />
        {/each}
    </ul>
</div>

<style>
    div {
        border-radius: 26px;
        width: 275px;
    }
</style>
