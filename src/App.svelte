<script lang="ts">
  import "./app.css";
  import clsx from "clsx";
  import Forms from "./lib/Forms.svelte";
  import Separator from "./lib/Separator.svelte";
  import DateResult from "./lib/DateResult.svelte";
</script>

<div
  class={clsx(
    "min-h-svh max-w-full px-[18px] p-20",
    "flex items-center justify-center",
  )}
>
  <div
    class={clsx(
      "space-y-6 px-[26px] py-[58px]",
      "bg-[--neutral-white] min-w-[250px]",
      "rounded-2xl rounded-br-[110px]",
      "shadow-md",
      "md:max-w-[840px] md:p-[56px]",
    )}
  >
    <Forms />
    <Separator />
    <DateResult />
  </div>
</div>
