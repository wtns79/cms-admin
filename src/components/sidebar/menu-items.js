import * as React from "react";
import {
    faBuilding,faCopy
} from "@fortawesome/free-solid-svg-icons";

const items = [
    { key:'1', label:'Страницы', path:'page', icon: faCopy,},
    { key:'2', label:'Категории', path:'category', icon: faBuilding,},
    { key:'3', label:'Содержание', path:'content', icon: faBuilding,},
    { key:'4', label:'Блоки', path:'block', icon: faBuilding,},
    { key:'5', label:'Меню', path:'menu', icon: faBuilding,},
    { key:'6', label:'Медиа', path:'media', icon: faBuilding,},
]
export default items;