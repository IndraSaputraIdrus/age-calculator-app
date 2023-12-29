<script lang="ts">
    import { appStore } from "../stores/app-store";

    console.log($appStore)
</script>

<div class="h-auto grid grid-cols-3 gap-[18px]">
  {#each $appStore as item}
    <label>
      <span>{item.label}</span>
      <input type="number" bind:value={item.value} placeholder={item.label} />
    </label>
  {/each}
</div>

<style lang="postcss">
  input[type="number"] {
    @apply border border-[--neutral-light-grey] appearance-none text-slate-900 px-4 py-3 rounded-md font-bold text-[--font-input] text-[--neutral-off-black];
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"]::-moz-inner-spin-button,
  input[type="number"]::-moz-outer-spin-button {
    -moz-appearance: none;
    margin: 0;
  }

  label {
    @apply flex flex-col gap-1.5 text-[--neutral-smokey-grey];
  }

  label > span {
    @apply uppercase font-bold tracking-[25%] text-[14px];
  }
</style>
