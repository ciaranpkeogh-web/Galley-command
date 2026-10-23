import {ArrowUpRight, Check, Clock3, Flame} from 'lucide-react';
import type {Dish} from '../data/menu';
import {portions,trays} from '../lib/production';
export function DishCard({dish,done,covers,buffer,onOpen}:{dish:Dish;done:number;covers:number;buffer:number;onOpen:()=>void}) {
 const ready=done===dish.tasks.length; const percent=Math.round(done/dish.tasks.length*100);
 return <button className="dish-card" onClick={onOpen}><div className="card-top"><span className={'dish-symbol '+dish.id}>{dish.icon}</span><span className={'badge '+(ready?'ready':done?'working':'queued')}>{ready?<Check size={12}/>:<Clock3 size={12}/>} {ready?'Ready':done?'In progress':'To do'}</span></div><span className="eyebrow">{dish.category} · {dish.equipment}</span><h3>{dish.name}</h3><div className="card-quantities"><span><strong>{portions(dish,covers,buffer)}</strong> portions</span><span>{trays(dish,covers,buffer)} × GN 1/1*</span></div><div className="progress-track"><span style={{width:percent+'%'}}/></div><div className="card-bottom"><span>{done}/{dish.tasks.length} prep steps</span><span className={'risk '+dish.risk.toLowerCase()}><Flame size={13}/>{dish.risk==='Low'?'Low risk':dish.risk==='High'?'Service critical':'Watch point'}<ArrowUpRight size={15}/></span></div></button>
}
