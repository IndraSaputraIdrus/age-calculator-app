<script lang="ts">
  import clsx from "clsx";
  import { appStore } from "../stores/app-store";
</script>

<div class={clsx("h-auto", "grid grid-cols-3 gap-[18px]", "md:grid-cols-4")}>
  {#each $appStore as state}
    <label
      class={clsx("flex flex-col gap-1.5", state?.error ? "text-error" : "text-[--neutral-smokey-grey]")}
    >
      <span class={clsx("uppercase font-bold tracking-[25%] text-[14px]")}
        >{state.label}</span
      >
      <input
        class={clsx(
          "appearance-none",
          "border rounded-lg",
          "text-slate-900 text-[--neutral-off-black]",
          "text-[24px] font-bold md:text-[32px]",
          "px-4 py-3",
          "md:px-6",
          state.error ? "border-error outline-none" : "border-[--neutral-light-grey]"
        )}
        maxlength={state.length}
        name={state.label}
        bind:value={state.value}
        type="text"
        placeholder={state.placeholder}
      />
      {#if state?.error}
        <p class="text-error italic text-xs font-thin">{state?.message}</p>
      {/if}
    </label>
  {/each}
</div>
