import React from 'react';
import { Image } from 'react-bootstrap';

export default function() {
  return[
    {  id: "human", 
      link: "/races/human", 
      img: <Image src = {require ('../../image/RacesTablet/human.jpg')} />, 
      caption: 'Люди',
      text: 'Люди - одна из самых молодых рас в Азероте, но на их долю уже выпало немало испытаний, и они выдержали их с честью.'

    }, {
      id: "dwarf", 
      link: ' ', 
      img: <Image src = {require ('../../image/RacesTablet/dwarf.jpg')} />,
      caption: 'Дворфы', 
      text: 'Отважные дворфы — древний народ, происходящий от земельников, существ из живого камня, созданных ...'
    }, {
      id: "night-elf", 
      link: ' ', 
      img: <Image src = {require ('../../image/RacesTablet/night-elf.jpg')} />,
      caption: 'Ночные эльфы', 
      text: ' Скрытые, загадочные ночные эльфы - одна из древнейших рас Азерота, и им не раз приводилось ...'
    },{
      id: "gnome", 
      link: ' ', 
      img: <Image src = {require ('../../image/RacesTablet/gnome.jpg')} />,
      caption: 'Гномы', 
      text: 'Умные, лихие и зачастую эксцентричные гномы – самая удивительная из цивилизованных рас Азерота.'
    }, {
      id: "draenei", 
      link: ' ', 
      img: <Image src = {require ('../../image/RacesTablet/draenei.jpg')} />,
      caption: 'Дренеи', 
      text: 'Непоколебимая преданность Свету повела дренеев вперед, в их прежний мир, терзаемый войнами.'
    }, {
      id: "worgen", 
      link: ' ', 
      img: <Image src = {require ('../../image/RacesTablet/worgen.jpg')} />,
      caption: 'Воргены', 
      text: 'Многие из них, в прошлом честные и верные граждане, превратились в воргенов — свирепых хищников.'
    }, {
      id: "pandaren-brewmaster", 
      link: ' ', 
      img: <Image src = {require ('../../image/RacesTablet/pandaren-brewmaster-art.jpg')} />,
      caption: 'Пандарены', 
      text: 'Мудрые пандарены живут в ладу с собой и с миром. Альянс открывает новые ценности: праведность и честь.'
    }

  ];
}