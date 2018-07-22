import React from 'react';
import { Image } from 'react-bootstrap';

export default function() {
  return{
    alliance: [
     {  id: "human", 
        link: "/races/human", 
        img: <Image src = {require ('../../image/Races/RacesTablet/human.jpg')} />, 
        caption: 'Люди',
        text: 'Люди - одна из самых молодых рас в Азероте, но на их долю уже выпало немало испытаний, и они выдержали их с честью.'
      }, {
        id: "dwarf", 
        link: "/races/dwarf", 
        img: <Image src = {require ('../../image/Races/RacesTablet/dwarf.jpg')} />,
        caption: 'Дворфы', 
        text: 'Отважные дворфы — древний народ, происходящий от земельников, существ из живого камня, созданных ...'
      }, {
        id: "night-elf", 
        link: "/races/night_elf", 
        img: <Image src = {require ('../../image/Races/RacesTablet/night-elf.jpg')} />,
        caption: 'Ночные эльфы', 
        text: ' Скрытые, загадочные ночные эльфы - одна из древнейших рас Азерота, и им не раз приводилось ...'
      },{
        id: "gnome", 
        link: "/races/gnome" , 
        img: <Image src = {require ('../../image/Races/RacesTablet/gnome.jpg')} />,
        caption: 'Гномы', 
        text: 'Умные, лихие и зачастую эксцентричные гномы – самая удивительная из цивилизованных рас Азерота.'
      }, {
        id: "draenei", 
        link: "/races/draeney", 
        img: <Image src = {require ('../../image/Races/RacesTablet/draenei.jpg')} />,
        caption: 'Дренеи', 
        text: 'Непоколебимая преданность Свету повела дренеев вперед, в их прежний мир, терзаемый войнами.'
      }, {
        id: "worgen", 
        link: "/races/worgen", 
        img: <Image src = {require ('../../image/Races/RacesTablet/worgen.jpg')} />,
        caption: 'Воргены', 
        text: 'Многие из них, в прошлом честные и верные граждане, превратились в воргенов — свирепых хищников.'
      }, {
        id: "pandaren-brewmaster", 
        link: "/races/pandaren", 
        img: <Image src = {require ('../../image/Races/RacesTablet/pandaren-brewmaster-art.jpg')} />,
        caption: 'Пандарены', 
        text: 'Мудрые пандарены живут в ладу с собой и с миром. Альянс открывает новые ценности: праведность и честь.'
      }
    ],
  horde: [
      {  id: "orc", 
        link: "/races/orc", 
        img: <Image src = {require ('../../image/Races/RacesTablet/orc.jpg')} />, 
        caption: 'Орки',
        text: 'В отличие от других рас Орды, орки родом не из Азерота. Орки-шаманы жили племенами на цветущем Дреноре.'
      }, {
        id: "undead", 
        link: "/races/undead", 
        img: <Image src = {require ('../../image/Races/RacesTablet/undead.jpg')} />,
        caption: 'Нежить', 
        text: 'После окончания Третьей войны хватка Короля-лича ослабла, и некоторые из его жертв сумели освободиться...'
      }, {
        id: "tauren", 
        link: "/races/tauren", 
        img: <Image src = {require ('../../image/Races/RacesTablet/tauren.jpg')} />,
        caption: 'Таурены', 
        text: 'Миролюбивые таурены — издревле жили в Калимдоре, следуя заповедям своей богини, Матери-Земли.'
      },{
        id: "troll", 
        link: "/races/troll", 
        img: <Image src = {require ('../../image/Races/RacesTablet/troll.jpg')} />,
        caption: 'Троли', 
        text: 'Яростные тролли Азерота славятся своей жестокостью, ненавистью ко всем другим расам и страстью к темному мистицизму.'
      }, {
        id: "blood-elf", 
        link: "/races/blood_elf", 
        img: <Image src = {require ('../../image/Races/RacesTablet/blood-elf.jpg')} />,
        caption: 'Эльфы крови', 
        text: 'Почти 7000 лет общество высших эльфов держалось вокруг священного Солнечного Колодца - волшебного источника...'
      }, {
        id: "goblin", 
        link: "/races/goblin" , 
        img: <Image src = {require ('../../image/Races/RacesTablet/goblin.jpg')} />,
        caption: 'Гоблины', 
        text: 'Когда-то гоблины были рабами троллей из джунглей на острове Кезан и добывали для них руду. '
      }, {
        id: "pandaren", 
        link: "/races/pandaren", 
        img: <Image src = {require ('../../image/Races/RacesTablet/pandaren.jpg')} />,
        caption: 'Пандарены', 
        text: 'Мудрые пандарены живут в ладу с собой и с миром. Орда приучила решительно защищать себя и других.'
      }
    ]

  };
}