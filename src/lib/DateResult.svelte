<script lang="ts">
  import { appStore } from "../stores/app-store";
</script>

<div class="row-span-3">
  {#each $appStore as data}
    <p
      class="italic text-[--neutral-off-black] font-bold text-[50px] leading-0"
    >
      <span class="text-[--primary-purple] w-max inline-block">{data.value || "- -"}</span>
      {data.label}s
    </p>
  {/each}
</div>
