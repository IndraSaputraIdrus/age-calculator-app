import { writable } from "svelte/store";

type AppStore = {
  label: string,
  value: number | null
}


const initialValue = [
  { label: "Day", value: null },
  { label: "Month", value: null },
  { label: "Year", value: null },
];

export const appStore = writable<AppStore[]>(initialValue)
