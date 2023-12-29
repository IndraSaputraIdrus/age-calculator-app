<script lang="ts">
  import "./app.css";
  import Inputs from "./lib/Inputs.svelte";
  import Separator from "./lib/Separator.svelte";
  import DateResult from "./lib/DateResult.svelte";
</script>

<div class="h-full flex items-center justify-center px-[18px] py-10">
  <div
    class="space-y-6 bg-[--neutral-white] px-[26px] py-[58px] rounded-2xl rounded-br-[110px] shadow-md min-w-[250px]"
  >
    <Inputs />
    <Separator />
    <DateResult />
  </div>
</div>
