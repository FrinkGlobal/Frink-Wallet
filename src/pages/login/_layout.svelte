<script>
    import { url, isActive } from '@sveltech/routify';
    const links = [
        ['./', 'login'],
        ['./signup', 'sign up'],
        ['./forgotpassword', 'forgot password'],
    ];
</script>

<div class="debug">
    <ul>
        {#each links as [path, name] (path)}
            <a
                href={$url(path)}
                class="rounded-l-lg block h-12 p-2 inline-block no-underline"
                class:active={$isActive(path)}>
                <span>{name}</span>
            </a>
        {/each}
    </ul>
    <slot />
</div>

<style>
    a.active {
        color: red;
    }
</style>
