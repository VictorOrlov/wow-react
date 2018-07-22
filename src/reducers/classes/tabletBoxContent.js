import React from 'react';
import { Image } from 'react-bootstrap';

export default function() {
  return{
     One : [
        {  id: "tablet_warrior", 
          link: '/classes/warrior', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/warriortablet.jpg')} />, 
          caption: 'Воин',
          text: 'В годы войны герои каждого из народов желали овладеть искусством боя. Воины сильны, обладают отличными лидерскими ...'
        }, {
          id: "tablet_hunter", 
          link: '/classes/hunter', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/huntertablet2.jpg')} />,
          caption: 'Охотник', 
          text: 'Зов природы звучит с незапамятных времен. Те, кто слышит его, готовы променять домашний уют на вольную, но ...'
        }, {
          id: "tablet_priest", 
          link: '/classes/priest', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/priesttablet.jpg')} />,
          caption: 'Жрец', 
          text: ' Тысячелетия назад они покинули покой храмов и уют святилищ, чтобы поддержать своих друзей на полях боя...'
        },{
          id: "tablet_shaman", 
          link: '/classes/shaman', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/shamtablet.jpg')} />,
          caption: 'Шаман', 
          text: 'Шаманы — наставники в духовных практиках, идущих не от богов, а от самих природных стихий. В отличие от ...'
        }, {
          id: "tablet_warloc", 
          link: '/classes/warloc', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/warlocktablet.jpg')} />,
          caption: 'Чернокнижник', 
          text: 'Перед лицом демонов большинство героев видят смерть. Чернокнижники видят огромные возможности. Их цель ...'
        }, {
          id: "tablet_druid", 
          link: '/classes/druid', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/druidtablet.jpg')} />,
          caption: 'Друид', 
          text: 'Опытный друид способен обрушить на врага чистую энергию природы, на огромном расстоянии поразив его небесной...'
        }
    ],
     Two : [
        { id: "tablet_paladin", 
          link: '/classes/paladin', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/paladintablet.jpg')} />, 
          caption: 'Паладин',
          text: 'Призвание паладина — защищать слабых, карать злодеев и изгонять зло из самых темных уголков мира. В бою эти...'
        }, {
          id: "tablet_rogue", 
          link: '/classes/rogue', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/roguetablet.jpg')} />,
          caption: 'Разбойник', 
          text: 'Честь разбойника можно купить за золото, а единственный кодекс, которому он следует, — контракт. Наемники не мучаются ...'
        }, {
          id: "tablet_death_king", 
          link: '/classes/death_king', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/deathknighttablet.jpg')} />,
          caption: 'Рыцарь смерти', 
          text: 'Когда Король-лич потерял контроль над рыцарями смерти, его бывшие приспешники пожелали отомстить за весь ужас, сотвор...'
        },{
          id: "tablet_mage", 
          link: '/classes/mage', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/magetablet.jpg')} />,
          caption: 'Маг', 
          text: 'Дисциплинированные ученики, наделенные острым умом, могут избрать путь мага. Тайное волшебство, доступное магу, сильно...'
        }, {
          id: "tablet_monk", 
          link: '/classes/monk', 
          img: <Image src = {require ('../../image/Classes/ClassesTablet/monktablet.jpg')} />,
          caption: 'Монах', 
          text: 'Драчуны-монахи сражаются голыми руками. Они в совершенстве владеют старинными пандаренскими боевыми искусствами. Мона...'
        }
    ]

  };
}