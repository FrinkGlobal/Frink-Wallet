<script>
    import { url, isActive } from '@sveltech/routify';
    export let path, name, iconName;
</script>

<li class="pl-8 mb-3">
    <a
        href={$url(path)}
        class="rounded-l-lg block h-12 p-2 flex items-center relative
        no-underline"
        class:active={$isActive(path)}>
        <span class="c-dgrey tx-sh text-base hover:c-blue">
            <i class={`${iconName} mr-2`} />
            <span>{name}</span>
        </span>

    </a>
</li>

<style>
    a.active {
        box-shadow: 2px 2px 5px var(--shadow), -5px -5px 10px var(--white);
        background-color: #ebecf0;
        border-radius: -30px !important;
    }

    a.active:hover {
        text-decoration: none;
    }

    a.active:before {
        content: '';
        height: 30px;
        width: 30px;
        position: absolute;
        right: -5px;
        top: -25px;
        border: 5px solid #ebecf0;
        border-left: 0;
        border-top: 0;
        border-radius: 0 0 65% 0;
    }
    a.active:after {
        content: '';
        height: 30px;
        width: 30px;
        position: absolute;
        right: -5px;
        bottom: -25px;
        border: 5px solid #ebecf0;
        border-left: 0;
        border-bottom: 0;
        border-radius: 0 65% 0% 0;
    }
</style>
