<script>
    import { Router } from '@sveltech/routify';
    import { routes } from '@sveltech/routify/tmp/routes';
</script>

<Router {routes} />

<style global>
    @import 'tailwindcss/base';
    @import './utils/tailwindcss/custom-base.css';
    @import 'tailwindcss/components';
    @import './utils/tailwindcss/custom-component.css';
    @import 'tailwindcss/utilities';
    @import './utils/tailwindcss/custom-utilities.css';
    :global(body) {
        @apply overflow-hidden;
    }
</style>
