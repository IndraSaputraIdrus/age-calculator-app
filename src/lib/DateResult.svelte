<script lang="ts">
  import clsx from "clsx";
  import { result } from "../stores/app-store";
</script>

<div class="row-span-3">
  {#each $result as data}
    <p
      class={clsx(
        "italic text-[--neutral-off-black] font-bold text-[50px] lowercase leading-tight",
        "sm:text-[102px]",
      )}
    >
      <span class="text-[--primary-purple] w-max inline-block"
        >{data.value || "- -"}</span
      >
      {data.label}s
    </p>
  {/each}
</div>
