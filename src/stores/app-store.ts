import { writable } from "svelte/store";

export type AppStore = {
  label: string;
  placeholder: string;
  value: string | null;
  length: number;
  error: boolean;
  message: string;
}

type Result = {
  label: string,
  value: string | null
}

const initialValue = [
  { label: "Day", placeholder: "DD", value: null, length: 2, error: false, message: "" },
  { label: "Month", placeholder: "MM", value: null, length: 2, error: false, message: "" },
  { label: "Year", placeholder: "YYYY", value: null, length: 4, error: false, message: "" },
];

const initialResult = [
  { label: "Year", value: null },
  { label: "Month", value: null },
  { label: "Day", value: null }
]

export const appStore = writable<AppStore[]>(initialValue)

export const result = writable<Result[]>(initialResult)
