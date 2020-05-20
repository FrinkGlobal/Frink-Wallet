<script>
    import { Router } from '@sveltech/routify';
    import { routes } from '@sveltech/routify/tmp/routes';
</script>

<Router {routes} />

<style global>
    @import 'tailwindcss/base';
    @import './pages/utils/tailwind/custom-base.css';
    @import 'tailwindcss/components';
    @import './pages/utils/tailwind/custom-component.css';
    @import 'tailwindcss/utilities';
    @import './pages/utils/tailwind/custom-utilities.css';
    :global(body) {
        @apply w-screen h-screen overflow-hidden bg-green-100;
    }
</style>
