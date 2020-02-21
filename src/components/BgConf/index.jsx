import React from 'react';
import './style.css';

const bgColors = [
    '#800080',
    '#FF00FF',
    '#000080',
    '#0000FF',
    '#008080',
    '#00FFFF',
    '#008000',
    '#00FF00',
    '#808000',
    '#FFFF00',
    '#800000',
    '#FF0000',
    '#fff',
    '#000000',
    '#808080',
    '#C0C0C0',
];

const BgConf = (props)=>{
    return <div className="bg-wrap">
            <p>            
            {bgColors.map((color)=>{
                return <span 
                       key={color}
                       className="bg-span" 
                       style={{background:color}}
                       onClick={()=>props.handleClick(color)}
                    />
            })}</p>
    </div>
}

export default BgConf;