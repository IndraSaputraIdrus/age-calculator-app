<script lang="ts">
  import clsx from "clsx";
  import { appStore, result } from "../stores/app-store";

  function handleClick(e: MouseEvent) {
    let day = Number($appStore[0].value);
    let month = Number($appStore[1].value);
    let year = Number($appStore[2].value);

    const dateNow = new Date();
    // day validation
    if (!day) {
      $appStore[0].error = true;
      $appStore[0].message = "This field is required";
    } else if (day > 31) {
      $appStore[0].error = true;
      $appStore[0].message = "Must a valid date";
    } else {
      $appStore[0].error = false;
      $appStore[0].message = "";
    }

    // month validation
    if (!month) {
      $appStore[1].error = true;
      $appStore[1].message = "This field is required";
    } else if (month > 12) {
      $appStore[1].error = true;
      $appStore[1].message = "Must a valid month";
    } else {
      $appStore[1].error = false;
      $appStore[1].message = "";
    }

    // year validation
    if (!year) {
      $appStore[2].error = true;
      $appStore[2].message = "This field is required";
    } else if (year > dateNow.getUTCFullYear()) {
      $appStore[2].error = true;
      $appStore[2].message = "Must be in the past";
    } else {
      $appStore[2].error = false;
      $appStore[2].message = "";
    }

    const birthDay = new Date(year, month - 1, day);
    const now = Date.now();

    // check if the input date is greater than the current date
    if (birthDay.getTime() > now) {
      $appStore.forEach((state) => {
        state.error = true;
        state.message = "Must be in the past";
      });
    }

    // check if error exist in appStore
    if ($appStore[0].error || $appStore[1].error || $appStore[2].error) {
      return;
    }

    const ageDiff = now - birthDay.getTime();
    const age = new Date(ageDiff);

    year = age.getUTCFullYear() - 1970;
    month = age.getMonth();
    day = age.getDate() - 1;

    const newResult = [
      { label: "Year", value: String(year) },
      { label: "Month", value: String(month) },
      { label: "day", value: String(day) },
    ];

    result.update(() => newResult);

    $appStore.forEach((state) => {
      state.value = "";
    });
  }
</script>

<div class="relative py-10 flex items-center">
  <button
    class={clsx(
      "transition hover:opacity-80",
      "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
      "md:right-0 md:left-auto md:-translate-x-0",
      "focus:ring focus:ring-[--primary-purple] focus:ring-offset-2",
      "rounded-full",
      "bg-[--primary-purple]",
      "w-[70px] aspect-square md:w-[80px]",
      "flex items-center justify-center",
    )}
    on:click={handleClick}
  >
    <img
      class="w-8 aspect-square"
      src="images/icon-arrow.svg"
      alt="icon-arrow"
    />
  </button>
  <hr class="w-full h-px bg-[--neutral-light-grey]" />
</div>
