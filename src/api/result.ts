import {Summary} from "@/api/summary";
import {Country} from "@/api/country";

export interface Result {
  Global: Summary;
  Countries: Country[];
}