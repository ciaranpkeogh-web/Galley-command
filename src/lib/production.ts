import type { Dish } from '../data/menu';
export const portions = (dish: Dish, covers:number, buffer:number) => Math.ceil(covers * dish.uptake * (1 + buffer / 100));
export const kilograms = (dish: Dish, covers:number, buffer:number) => portions(dish,covers,buffer) * dish.grams / 1000;
export const trays = (dish: Dish, covers:number, buffer:number) => Math.ceil(kilograms(dish,covers,buffer)/dish.capacity);
export function readSaved<T>(key:string, fallback:T):T { try { const value=JSON.parse(localStorage.getItem(key)||'null'); return value ?? fallback; } catch { return fallback; } }
