import test from 'node:test';
import assert from 'node:assert/strict';
import {portions,kilograms,trays} from '../src/lib/production.ts';
const dish={uptake:.45,grams:180,capacity:5};
test('buffet uptake and contingency round portions upwards',()=>{assert.equal(portions(dish,350,10),174);assert.equal(portions(dish,50,0),23)});
test('finished yield and tray capacity follow scaled portions',()=>{assert.equal(kilograms(dish,350,10),31.32);assert.equal(trays(dish,350,10),7);assert.equal(trays({...dish,uptake:1,grams:100,capacity:5},50,0),1)});
test('higher cover counts never reduce production',()=>{for(let c=50;c<500;c+=25){assert.ok(portions(dish,c+25,10)>=portions(dish,c,10));assert.ok(trays(dish,c+25,10)>=trays(dish,c,10))}});
