<script>
    let title = 'Frink`s Wallet UI';
</script>

<div class="p-8">
    <h1 class="c-grey tx-sh font-bold text-3xl text-center">{title}</h1>
    <p class="text-3xl tx-sh font-bold">text-3xl tx-sh font-bold</p>
    <p class="c-grey text-xl tx-sh font-bold">
        c-grey text-3xl tx-sh font-bold
    </p>
    <p class="c-red tx-sh text-base">c-red tx-sh text-base</p>
    <p class="c-blue tx-sh text-base">c-blue tx-sh text-base</p>
    <p class="c-grey tx-sh text-base">c-grey tx-sh text-base</p>
    <p class="c-dgrey tx-sh text-base">c-dgrey tx-sh text-base</p>
    <p class="c-red tx-sh text-base font-bold">
        c-red tx-sh text-base font-bold
    </p>
    <p class="c-blue tx-sh text-base font-bold">
        c-blue tx-sh text-base font-bold
    </p>
    <p class="c-grey tx-sh text-base font-bold">
        c-grey tx-sh text-base font-bold
    </p>
    <p class="c-dgrey tx-sh text-base font-bold">
        c-dgrey tx-sh text-base font-bold
    </p>

    <br />

    <div class="sh hover:hover-sh rounded-lg p-8 hover:mt-4">
        <p class="c-dgrey tx-sh text-base hover:text-black">Normal Card</p>
    </div>

    <br />

    <div class="in-sh hover:hover-in-sh p-8 rounded">
        <p class="c-dgrey tx-sh text-base">Inset card</p>
    </div>

    <br />

    <span class="c-dgrey tx-sh">
        <i class="far fa-user" />
        Normal icon
    </span>
    <span class="c-dgrey tx-sh">
        <i class="far fa-user fa-2x" />
        Icon 2X
    </span>
    <span class="c-dgrey tx-sh">
        <i class="far fa-user fa-3x" />
        Icon 3x
    </span>

    <br />
    <br />

    <label class="block mb-6 w-full">
        <input
            type="text"
            placeholder="Email Address"
            class="border-0 outline-none text-base p-4 rounded-full tx-sh
            bg-color in-sh focus:hover-in-sh appearance-none" />
    </label>

    <button
        class="c-red sh hover:hover-sh font-bold p-4 rounded-full tx-sh pointer
        min-w-1/2 active:active-sh"
        type="button">
        <i class="fas fa-user mr-2" />
        Log in
    </button>

    <br />
    <br />

    <div class="flex justify-around">
        <button
            class="c-dgrey sh hover:hover-sh py-4 px-5 rounded-md tx-sh pointer
            active:active-sh"
            type="button">
            <i class="fas fa-anchor" />
        </button>
        <button
            class="c-dgrey sh hover:hover-sh py-4 px-5 rounded-md tx-sh pointer
            active:active-sh"
            type="button">
            <i class="fas fa-bell" />
        </button>
        <button
            class="c-dgrey sh hover:hover-sh py-4 px-5 rounded-md tx-sh pointer
            active:active-sh"
            type="button">
            <i class="fas fa-comment" />
        </button>
    </div>
</div>
