import React from 'react';
import ReactDOM from 'react-dom';
import '../../components/mount_guide/MountGuide.css';

export default function(){
	return[
		{
		 id: "kati",
		 info:<p><a href="http://ru.wowhead.com/npc=384">Кати Охотница</a> - 7 коней. <span className="colorBlue">АЛЬЯНС</span></p>,
		}, {
		 id: "veron",
		 info:<p><a href="http://ru.wowhead.com/npc=1261">Верон Янтарлен</a> - 6 баранов. <span className="colorBlue">АЛЬЯНС</span></p>,
		}, {
		 id: "lelanay",
		 info:<p><a href="http://ru.wowhead.com/npc=4730">Леланай</a> - 7 саблезубов. <span className="colorBlue">АЛЬЯНС</span></p>, 
		}, {
		 id: "toralius",
		 info:<p><a href="http://ru.wowhead.com/npc=17584">Тораллиус Пастух</a> - 6 элеков. <span className="colorBlue">АЛЬЯНС</span></p>, 
		}, {
		 id: "milly",
		 info:<p><a href="http://ru.wowhead.com/npc=7955">Милли Перосвист</a> - 7 механодолгоногов <span className="colorBlue">АЛЬЯНС</span></p>, 
		}, {
		 id: "astrid",
		 info:<p><a href="http://ru.wowhead.com/npc=55285">Астрид Длинныйчулок</a> - 2 коня. <span className="colorBlue">АЛЬЯНС</span></p>, 
		}, {
		 id: "tannek",
		 info:<p><a href="http://ru.wowhead.com/npc=43768">Таннек Каменный Клюв</a> - 7 грифонов. <span className="colorBlue">АЛЬЯНС</span></p>, 
		}, {
		 id: "ogunaro",
		 info:<p><a href="http://ru.wowhead.com/npc=3362">Огунаро Волкопас</a> - 7 волков. <span className="colorRed">ОРДА</span></p>, 
		}, {
		 id: "zolnir",
		 info:<p><a href="http://ru.wowhead.com/npc=7952">Зьольнир</a> - 7 ящеров. <span className="colorRed">ОРДА</span></p>, 
		}, {
		 id: "harb",
		 info:<p><a href="http://ru.wowhead.com/npc=3685">Харб Точеное Копыто</a> - 6 кодо. <span className="colorRed">ОРДА</span></p>, 
		}, {
		 id: "zaharia",
		 info:<p><a href="http://ru.wowhead.com/npc=4731">Захария Пост</a> - 7 коней. <span className="colorRed">ОРДА</span></p>,  
		}, {
		 id: "vinestra",
		 info:<p><a href="http://ru.wowhead.com/npc=16264">Винестра</a> - 7 крылобегов. <span className="colorRed">ОРДА</span></p>,  
		}, {
		 id: "kollvarzaton",
		 info:<p><a href="http://ru.wowhead.com/npc=48510">Колл Ворзатон</a> - 2 трицикла. <span className="colorRed">ОРДА</span></p>,  
		}, {
		 id: "drakma",
		 info:<p><a href="http://ru.wowhead.com/npc=44918">Дракма</a> - 7 крылобегов. <span className="colorRed">ОРДА</span></p>,  
		}, {
		 id: "rivern",
		 info:<p><a href="http://ru.wowhead.com/npc=10618">Риверн Холодный Ветер</a> - 1 тигр. <span className="colorBlue">АЛЬЯНС</span></p>,  
		}, {
		 id: "fedrienn",
		 info:<p><a href="http://ru.wowhead.com/npc=17904">Федриен Быстрое Копье</a> - 1 гиппогриф. ОБЩИЕ</p>,  
		}, {
		 id: "harlunk",
		 info:<p><a href="http://ru.wowhead.com/npc=23489">Продавец драконов Харлунк</a> - 6 драконов. ОБЩИЕ</p>,  
		}, {
		 id: "grella",
		 info:<p><a href="http://ru.wowhead.com/npc=23367">Грелла</a> - 5 скатов. ОБЩИЕ</p>,  
		}, {
		 id: "narasu",
		 info:<p><a href="http://ru.wowhead.com/npc=20240">Торговец Нарасу</a> - 8 табуков. ОБЩИЕ</p>,  
		}, {
		 id: "nebostraza",
		 info:<p><a href="http://ru.wowhead.com/npc=32533">Небостраза</a> - 1 дракон. ОБЩИЕ</p>,  
		}, {
		 id: "lillehov",
		 info:<p><a href="http://ru.wowhead.com/npc=32540">Лиллехофф</a> - 4 мамонта. ОБЩИЕ</p>,  
		}, {
		 id: "abasi",
		 info:<p><a href="http://ru.wowhead.com/npc=48617">Кузнец Абаси</a> - 2 верблюда. ОБЩИЕ</p>,  
		}, {
		 id: "jaluu",
		 info:<p><a href="http://ru.wowhead.com/npc=59908">Джалуу Щедрый</a> - 3 журавля. ОБЩИЕ</p>,  
		}, {
		 id: "zikk",
		 info:<p><a href="http://ru.wowhead.com/npc=64599">Кователь янтаря Зикк</a> - 1 скорпион. ОБЩИЕ</p>,  
		}, {
		 id: "natpegl",
		 info:<p><a href="http://ru.wowhead.com/npc=63721">Нат Пэгл</a> - 1 долгоног. ОБЩИЕ</p>,  
		}, {
		 id: "jinakogot",
		 info:<p><a href="http://ru.wowhead.com/npc=58706">Джина Грязный Коготь</a> - 3 козла. ОБЩИЕ</p>,   
		}, {
		 id: "jushiplut",
		 info:<p><a href="http://ru.wowhead.com/npc=64595">Жуши Плут</a>. - 3 тигра. ОБЩИЕ</p>,   
		}, {
		 id: "cvetoklotosa",
		 info:<p><a href="http://ru.wowhead.com/npc=64001">Мудрец Цветок Лотоса</a> - 1 змей. ОБЩИЕ</p>,   
		}, {
		 id: "saniycheshuya",
		 info:<p><a href="http://ru.wowhead.com/npc=58414">Сань Рыжая Чешуя</a> - 3 змея. ОБЩИЕ</p>,   
		}, {
		 id: "tanshintao",
		 info:<p><a href="http://ru.wowhead.com/npc=64605">Тань Шинь Тяо</a> - 1 диск. ОБЩИЕ</p>,   
		}, {
		 id: "vasarin",
		 info:<p><a href="http://ru.wowhead.com/npc=67672">Васарин Красный Рассвет</a> - 1 динозавр. <span className="colorRed">ОРДА</span></p>,   
		}, {
		 id: "hairenpredaniy",
		 info:<p><a href="http://ru.wowhead.com/npc=68000">Хайрен Певец Преданий</a> - 1 динозавр. <span className="colorBlue">АЛЬЯНС</span></p>,   
		}, {
		 id: "sheypressler",
		 info:<p><a href="http://ru.wowhead.com/npc=46602">Шей Пресслер</a> - 1 лев. <span className="colorBlue">АЛЬЯНС</span></p>,   
		}, {
		 id: "goram",
		 info:<p><a href="http://ru.wowhead.com/npc=46572">Горам</a> - 1 скорпион. <span className="colorRed">ОРДА</span></p>,   
		}, {
		 id: "kytkach",
		 info:<p><a href="http://ru.wowhead.com/npc=73306">Ткач туманов Ку</a> - 1 золотой змей. ОБЩИЕ</p>,   
		}, {
		 id: "velikiegrifony",
		 info:<p><a href="http://ru.wowhead.com/item=93168">Величественный бронированный<br/> грифон</a><br/> 
		 И<br/> 
		 <a href="http://ru.wowhead.com/item=93169">Величественная бронированная виверна</a> - Способ получения</p>    
		}
	]}
	

