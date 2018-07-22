import React from 'react';
import { Image } from 'react-bootstrap';
import "../../components/addons/Addons.css";

export default function(){
  return[
      {
        id: "addon_monk",
        anchor: "monk",
        name: "Аддоны для Монаха",
        tables:[
          {
            id: "NugComboBar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NugComboBar-mini.png'  )} />,
            text: <span>
              <h4>NugComboBar</h4>
              <p>Аддон позволяющий более 
              наглядно отслеживать количество 
              Ци (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/323/NugComboBar-5.2.9.zip">скачать</a>
          }, {
            id: "SpellFlashMonk",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-Monk-mini.png'  )} />,
            text: <span>
              <h4>Bitten’s SpellFlash: Monk</h4>
              <p>Подсказывает какие заклинания  
              лучше всего использовать в данный 
              момент (для хмелевара и танцующего с 
                ветром). Является дополнением к аддону  
              SpellFlash. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/368/BittensSpellFlash_Monk-50400.1.1.zip">скачать</a>
          }, {
            id: "MonkTimers",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/MonkTimers-mini.jpg'  )} />,
            text: <span>
              <h4>MonkTimers</h4>
              <p>Показывает кулдауны и бафы для всех 
              специализаций монахов. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/826/MonkTimers-1.23.zip">скачать</a>
          }, {
            id: "ChiBar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/ChiBar-mini.jpg'  )} />,
            text: <span>
              <h4>ChiBar</h4>
              <p>Позволяет настроить отображение Ци по вашему вкусу.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/707/842/MistWeaver_5.18.zip">скачать</a>
          }, {
            id: "Mistweaver",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Mistweaver-mini.jpeg'  )} />,
            text: <span>
              <h4>Mistweaver</h4>
              <p>Специальный аддон для лечения монахом. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/732/981/MistWeaver_5.21.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_warrior",
        anchor: "war",
        name: "Аддоны для Воина",
        tables:[
          {
            id: "SpellFlashWarrior",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-Warrior-mini.png')} />,
            text: <span>
              <h4>BittensSpellFlash Warrior</h4>
              <p>Самый популярный аддон для воина. 
              Подсвечивает способности, которые 
              стали доступны. Имеет много настроек. 
              (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/736/583/BittensSpellFlash_Warrior-50400.1.0.zip">скачать</a>
          }, {
            id: "EnragedWarrior",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Enraged-—-Warrior-DPS-Helper-mini.png')} />,
            text: <span>
              <h4>Enraged — Warrior DPS Helper</h4>
              <p>Подсказывает какие заклинания  
              лучше всего использовать в данный 
              момент (для хмелевара и танцующего с 
                ветром). Является дополнением к аддону  
              SpellFlash. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/628/315/Enraged-r78.zip">скачать</a>
          }, {
            id: "Protwarbar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Protwarbar-mini.png'  )} />,
            text: <span>
              <h4>Protwarbar</h4>
              <p>Полоска ярости для прото-вара. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/630/protwarbar-v0.7.5.3.zip">скачать</a>
          }, {
            id: "Watcher",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Watcher-mini.png'  )} />,
            text: <span>
              <h4>Watcher</h4>
              <p>Аддон предназначен для предоставления актуальной 
              инофрмации по повышению ДПС (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/336/Watcher.zip">скачать</a>
          }, {
            id: "Vengeance",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Vengeance-mini.jpg'  )} />,
            text: <span>
              <h4>Vengeance</h4>
              <p>Показывает Силу атаки, добавленную за 
              счет Отмщения.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/652/457/Vengeance-1.0.4.zip">скачать</a>
          }, 
        ]
      },

      {
        id: "addon_paladin",
        anchor: "pal",
        name: "Аддоны для Паладина",
        tables:[
          {
            id: "NugComboBar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NugComboBar-mini.png'  )} />,
            text: <span>
              <h4>NugComboBar</h4>
              <p>Аддон позволяющий более наглядно отслеживать количество зарядов света.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/323/NugComboBar-5.2.9.zip">скачать</a>
          }, {
            id: "Retribution",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Retribution-FCFS-helper-clcret-mini.jpg'  )} />,
            text: <span>
              <h4>Retribution FCFS helper (clcret)</h4>
              <p>Аддон для ретри-пладина. Подсвечивает способность, которая идет следующая в ротации. Возможность настраивать ротацию. Возможность показа бафов, дебафов и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/736/599/CLCRet-v.1.5.40.001.zip">скачать</a>
          }, {
            id: "SmartRes2",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/SmartRes2-mini.jpg'  )} />,
            text: <span>
              <h4>SmartRes2</h4>
              <p>Координирует действия рейда/группы при восстановлении после вайпа</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/162/SmartRes2-Release_2.5.9.zip">скачать</a>
          }, {
            id: "PallyPower",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/PallyPower-mini.png'  )} />,
            text: <span>
              <h4>PallyPower</h4>
              <p>Этот аддон обеспечивает более наглядный и интерактивный способ отслеживания аур, бафов и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/684/133/PallyPower-v5.0.8.zip">скачать</a>
          }, {
            id: "SpellFlashPally",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-Pally-mini.png'  )} />,
            text: <span>
              <h4>Bitten's SpellFlash: Pally</h4>
              <p>Подсвечивает способности, которые стали доступны, очень удобный аддон.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/734/284/NugComboBar-5.2.11.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_dk",
        anchor: "dk",
        name: "Аддоны для Рыцаря Смерти",
        tables:[
          {
            id: "Dkcrutch",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/DKCrutch-mini.png'  )} />,
            text: <span>
              <h4>Dkcrutch</h4>
              <p>Показывает следующую способность для Вашей ротации,  а также проки и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/734/405/dkcrutch-v0.9.4release.zip">скачать</a>
          }, {
            id: "DKIRunes",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/DKIRunes-mini.jpg'  )} />,
            text: <span>
              <h4>DKIRunes</h4>
              <p>Бар для более удобной визуализации количества рун.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/682/752/DKIRunes-Reloaded_3_1_3.zip">скачать</a>
          }, {
            id: "SpellFlashDK",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-DK-mini.png'  )} />,
            text: <span>
              <h4>Bitten's SpellFlash: DK</h4>
              <p>Подсвечивает способности, которые стали доступны, очень удобный аддон. </p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/3/BittensSpellFlash_DK-50400.1.0.zip">скачать</a>
          }, {
            id: "BloodShieldTracker",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Blood-Shield-Tracker-mini.png'  )} />,
            text: <span>
              <h4>Blood Shield Tracker</h4>
              <p>Позволяет более удобно и наглядно использjвать щит крови. Добавляет бар с необходимой информацией связанной с щитом крови.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/275/BloodShieldTracker-0.28.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_shaman",
        anchor: "sham",
        name: "Аддоны для Шамана",
        tables:[
          {
            id: " NugComboBar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NugComboBar-mini.png'  )} />,
            text: <span>
              <h4> NugComboBar</h4>
              <p>Аддон позволяющий более наглядно отслеживать количество стаков Оружия Водоворота и Сверкания. </p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/323/NugComboBar-5.2.9.zip">скачать</a>
          }, {
            id: "TotemTimers",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/TotemTimers-mini.jpg'  )} />,
            text: <span>
              <h4>TotemTimers</h4>
              <p>Этот аддон предназначен для упрощения управления тотемами. Добавляет наборы тотемов, показывает таймеры их восстановления и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/825/TotemTimers-11.0.18.zip">скачать</a>
          }, {
            id: "Elementarist",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Elementarist-mini.png'  )} />,
            text: <span>
              <h4>Elementarist</h4>
              <p>Подсказывает какое заклинание использовать следующим для увеличения ДПС, а также показывает ДПС по одной цели (не общий) и процент агро.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/734/410/Elementarist-v3.2.3release.zip">скачать</a>
          }, {
            id: "BittensSpellFlashShaman",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/BittensSpellFlash-Shaman-mini.png'  )} />,
            text: <span>
              <h4>BittensSpellFlash Shaman</h4>
              <p>Подсвечивает способности, которые стали доступны, очень удобный аддон.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/374/BittensSpellFlash_Shaman-50400.1.1.zip">скачать</a>
          }, {
            id: "FloTotemBar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/FloTotemBar-mini.png'  )} />,
            text: <span>
              <h4>FloTotemBar</h4>
              <p>Очень удобный бар для тотемов.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/953/FloTotemBar-5.4.30.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_druid",
        anchor: "dru",
        name: "Аддоны для Друида",
        tables:[
          {
            id: "MageNuggetsDru",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NugComboBar-mini.png'  )} />,
            text: <span>
              <h4>Mage Nuggets</h4>
              <p>Хороший аддон для Мункина. Показывает кулдауны, различную статистику. Можно настраивать звуковые оповещения и еще множество функций.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/736/393/MageNuggets-3.41.zip">скачать</a>
          }, {
            id: "BadKitty",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/BadKitty-mini.png'  )} />,
            text: <span>
              <h4>BadKitty</h4>
              <p>Дебаф трэкер для ферал друида.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/734/112/BadKitty_2.5.8.zip">скачать</a>
          }, {
            id: "SpellFlashSpellFlashDruide",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-Druid-mini.png'  )} />,
            text: <span>
              <h4>Bitten's SpellFlash: </h4>
              <p>Подсвечивает способности, которые стали доступны, очень удобный аддон</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/366/BittensSpellFlash_Druid-50400.1.2.zip">скачать</a>
          }, {
            id: "SmartRes2",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/SmartRes2-mini.jpg'  )} />,
            text: <span>
              <h4>SmartRes2</h4>
              <p>Координирует действия рейда/группы при восстановлении после вайпа.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/162/SmartRes2-Release_2.5.9.zip">скачать</a>
          }, {
            id: "Symbiosis",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Symbiosis-mini.jpg'  )} />,
            text: <span>
              <h4>Symbiosis</h4>
              <p>Подсказки по использованию Симбиоза</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/183/symbiosis_v0.44.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_mage",
        anchor: "mage",
        name: "Аддоны для Мага",
        tables:[
          {
            id: "MageNuggetsMage",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Mage-Nuggets-mini.jpg'  )} />,
            text: <span>
              <h4>Mage Nuggets</h4>
              <p>Существенно упрощает игру Магом: помогает отслеживать проки, показывает силу заклинаний в реальном времени, чтобы выбрать наиболее удачный момент для бурста и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/736/393/MageNuggets-3.41.zip">скачать</a>
          }, {
            id: "SpellFlashMage",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/ittens-SpellFlash-Mage-mini.jpg'  )} />,
            text: <span>
              <h4>Bitten's SpellFlash: Mage</h4>
              <p>Подсвечивает способности, которые стали доступны, очень удобный аддон. </p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/29/BittensSpellFlash_Mage-50400.1.0.zip">скачать</a>
          }, {
            id: "CombustionHelper",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/CombustionHelper-mini.png'  )} />,
            text: <span>
              <h4>CombustionHelper</h4>
              <p>Фрэйм отслеживающий Доты.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/736/635/CombustionHelper_3_5_2.zip">скачать</a>
          }, {
            id: "Scorchio2",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Scorchio2-mini.png'  )} />,
            text: <span>
              <h4>Scorchio2</h4>
              <p>Показывает дебафы на целях при мультидотинге.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/732/Scorchio2-v1.4.3.zip">скачать</a>
          }, {
            id: "SpellStealer",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/SpellStealer-mini.jpg'  )} />,
            text: <span>
              <h4>SpellStealer</h4>
              <p>Небольшой фрэйм, показывающие какие бафы, висящие на цели, можно украть.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/707/953/SpellStealer-v1.81.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_warloc",
        anchor: "warloc",
        name: "Аддоны для Чернокнижника",
        tables:[
          {
            id: "ForteXorcist",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/ForteXorcist-mini.png'  )} />,
            text: <span>
              <h4>ForteXorcist</h4>
              <p>Универсальный аддон с множеством функций: показывает таймеры заклинаний, 
                можно настроить звуковые оповещения, отправку различных сообщений, 
                подсветка восстановленных способностей и многое другое. </p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/632/558/ForteXorcist-v1.980.8.zip">скачать</a>
          }, {
            id: "NugComboBarWarloc",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NugComboBar-mini.png'  )} />,
            text: <span>
              <h4> NugComboBar</h4>
              <p>Аддон позволяющий более наглядно отслеживать количество осколков, раскаленных углей.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/738/17/BittensSpellFlash_Warlock-50400.1.1.zip">скачать</a>
          }, {
            id: "SpellFlashWarlock",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-Warlock-mini.png'  )} />,
            text: <span>
              <h4>Bitten's SpellFlash: Warlock</h4>
              <p>Подсвечивает способности, которые стали доступны, очень удобный аддон </p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/705/768/BittensSpellFlash_Warlock-3.7.1.zip">скачать</a>
          }, {
            id: "WarlockReminder",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/WarlockReminder-mini.jpg'  )} />,
            text: <span>
              <h4>WarlockReminder</h4>
              <p>Напоминалка о бафах, кулдаунах и проках.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/704/585/WarlockReminder-2.1.7.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_rogue",
        anchor: "rogue",
        name: "Аддоны для Разбойника",
        tables:[
          {
            id: "",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NugComboBar-mini.png'  )} />,
            text: <span>
              <h4> NugComboBar</h4>
              <p>Аддон позволяющий более наглядно отслеживать комбо поинты и энергию.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/323/NugComboBar-5.2.9.zip">скачать</a>
          }, {
            id: "SpellFlashRogue",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bittens-SpellFlash-mini.png'  )} />,
            text: <span>
              <h4>Bitten's SpellFlash</h4>
              <p>Подсвечивает способности , которые стали доступны, очень удобный аддон.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/372/BittensSpellFlash_Rogue-50400.1.1.zip">скачать</a>
          }, {
            id: "Breakables",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Breakables-mini.jpg'  )} />,
            text: <span>
              <h4>Breakables</h4>
              <p>Показывает какие из предметов в инвентаре могут быть разобраны, распылены и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/732/763/Breakables-1.3.12.zip">скачать</a>
          }, {
            id: "HearKitty",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/HearKitty-mini.jpg'  )} />,
            text: <span>
              <h4>HearKitty</h4>
              <p>Выдает звуковой эффект, оповещающий о том, что Вы накопили достаточно комбо-поинтов для финишера.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/737/357/HearKitty-1.5.3.zip">скачать</a>
          }, {
            id: "MisDirectionHelper2",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/MisDirectionHelper2-mini.jpg'  )} />,
            text: <span>
              <h4>MisDirectionHelper2</h4>
              <p>Позволяет гораздо удобнее выбирать цель (не тыкая на цель на экране, а нажимая на неё в специальном окошке)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/735/169/MisDirectionHelper2-v5.4.0.0.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_hunter",
        anchor: "hunt",
        name: "Аддоны для Охотника",
        tables:[
          {
            id: "BigRedBrentSpellFlash",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/BigRedBrents-SpellFlash-mini.jpg'  )} />,
            text: <span>
              <h4>BigRedBrent's SpellFlash</h4>
              <p>Аддон для подсветки способностей.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/734/295/BittensSpellFlash_Hunter-50400.1.1.zip">скачать</a>
          }, {
            id: "JSHB",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/JSHB-JS-Hunter-Bar-mini.jpg'  )} />,
            text: <span>
              <h4>JSHB - JS' Hunter Bar</h4>
              <p>Очень функциональный аддон. Показывает проки, таймеры способностей, бафов. Возможна настройка  звуковых оповещений и т.д.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/710/280/JSHB-v4.3.zip">скачать</a>
          }, {
            id: "FloTotemBar",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/FloTotemBar-mini.png'  )} />,
            text: <span>
              <h4>FloTotemBar</h4>
              <p>Очень удобный бар для ловушек.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/953/FloTotemBar-5.4.30.zip">скачать</a>
          }, {
            id: "KharthussHunterTimers",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/KharthussHunterTimers-mini.jpg'  )} />,
            text: <span>
              <h4>KharthussHunterTimers</h4>
              <p>Показывает таймеры способностей в передвигаемых окошках.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/697/955/KharthussHunterTimers-3.6.9.zip">скачать</a>
          }, {
            id: "Watcher",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Watcher-mini.png'  )} />,
            text: <span>
              <h4>Watcher</h4>
              <p>Показывает приоритет атак вашей ротации в реальном времени.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/336/Watcher.zip">скачать</a>
          }
        ]
      }, 

       {
        id: "addon_UI",
        anchor: "ui",
        name: "Сборки UI",
        tables:[
          {
            id: "ElvUI",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/ElvUI.jpg'  )} />,
            text: <span>
              <h4>ElvUI</h4>
              <p>Аддон, полностью заменяющий стандартный интерфейс на более удобный. Очень рекомендую установить.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://www.tukui.org/downloads/elvui-6.46.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_raids",
        anchor: "raids",
        name: "Аддоны для рейдов",
        tables:[
          {
            id: "Recount",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Recount-mini.jpg'  )} />,
            text: <span>
              <h4>Recount</h4>
              <p>ДПС-метр, один из самых популярных аддонов. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/734/132/Recount-v5.4.0_release.zip">скачать</a>
          }, {
            id: "DBM",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Deadly-Boss-Mods.png'  )} />,
            text: <span>
              <h4>DBM</h4>
              <p>Deadly Boss Mods - крайне необходимый аддон для рейдера. Показывает таймеры событий в бою, способностей босса и т.д. (обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/732/306/DBM-Core-5.4.0.zip">скачать</a>
          }, {
            id: "AtlasLootEnhanced",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/AtlasLoot-Enhanced-mini.jpg'  )} />,
            text: <span>
              <h4>AtlasLoot Enhanced</h4>
              <p>Позволяет смотреть таблицы добычи боссов во время игры.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/732/912/AtlasLoot-v7.07.00.zip">скачать</a>
          }, {
            id: "HealBotContinued",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons//HealBot-Continued-mini.jpg'  )} />,
            text: <span>
              <h4>HealBot Continued</h4>
              <p>Жизненно необходимый аддон для лекарей. Существенно упрощает игру хилом.(обновлен для WoW 5.4)</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/733/58/HealBot_5.4.0.0_ALL.zip">скачать</a>
          }, {
            id: "GTFO",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/GTFO-minii.jpg'  )} />,
            text: <span>
              <h4>GTFO</h4>
              <p>aддон, который предупреждает Вас, если Вы стоите в войдзонах или совершаете другие ошибки. Очень полезный и легкий в настройке.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/739/593/GTFO-4.24.1.zip">скачать</a>
          }, 
        ]
      },

      {
        id: "addon_arenapvp",
        anchor: "arena",
        name: "Аддоны для Арены и PvP",
        tables:[
          {
            id: "Gladiusv3",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Gladius-v3-mini.jpg'  )} />,
            text: <span>
              <h4>Gladius v3</h4>
              <p>С помощью Gladius вы сможете добавить фреймы противника на арене. Это многофункциональный аддон, 
                который с легкостью добавит фокус противника и поможет выбрать в цель, нужно просто кликнуть на фрейм.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/755/199/Gladius_3.1.0.zip">скачать</a>
          }
        ]
      },

      {
        id: "addon_bank",
        anchor: "bank",
        name: "Аддоны для инвентаря и банка",
        tables:[
          {
            id: "Bagnon",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Bagnon-mini.png'  )} />,
            text: <span>
              <h4>Bagnon</h4>
              <p>Это аддон для объединения сумок, банковских ячеек. Позволяет просматривать сумки других персонажей на аккаунте и многое другое.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://www.curseforge.com/media/files/735/709/Bagnon_5.4.2.zip">скачать</a>
          }
        ]
      },


      {
        id: "addon_under",
        anchor: "under",
        name: "Другие",
        tables:[
          {
            id: "NPCScan",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/NPCScan-mini.jpg'  )} />,
            text: <span>
              <h4>NPCScan</h4>
              <p>Выслеживает нужных мобов и NPC. Вы можете заниматься своими делами, аддон сообщит Вам если поблизости будет находтся редкий моб или нужный npc.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/681/876/_NPCScan.Overlay.Broker-v1.2.2.zip">скачать</a>
          }, {
            id: "WorldBossStatus",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/World-Boss-Status-mini.png'  )} />,
            text: <span>
              <h4>World Boss Status</h4>
              <p>Отслеживает статус мировых боссов.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/704/404/WorldBossStatus-v1.2.2.zip">скачать</a>
          }, {
            id: "Handynotes",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Handynotes-mini.jpg'  )} />,
            text: <span>
              <h4>Handynotes</h4>
              <p>Добавляет различные подсказки на карте.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/493/209/HandyNotes-v1.2.0.zip">скачать</a>
          }, {
            id: "HandyNotes_TimelessIsleChests",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/HandyNotes_TimelessIsleChests-mini.png'  )} />,
            text: <span>
              <h4>HandyNotes_TimelessIsleChests</h4>
              <p>Показывает на карте неразграбленные сундуки на Вневременном Острове. Требует установки базового аддона HandyNotes.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/738/557/HandyNotes_TimelessIsleChests-1.08.zip">скачать</a>
          }, {
            id: "HandyNotes_TimelessIsle_RareElites",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/HandyNotes_TimelessIsle_RareElites-mini.jpg'  )} />,
            text: <span>
              <h4>HandyNotes_TimelessIsle_RareElites</h4>
              <p>Показывает расположение рарников на Вневременном Острове. Требует установки базового аддона HandyNotes.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://addons.curse.cursecdn.com/files/738/56/HandyNotes_TimelessIsle_RareElites.zip">скачать</a>
          }, {
            id: "HandyNotes_HallowEnd",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/HandyNotes-Hallows-End-mini.jpg'  )} />,
            text: <span>
              <h4>HandyNotes - Hallow's End</h4>
              <p>Показывает места с конфетами, которые Вы еще не посещали. Требует установки базового аддона HandyNotes.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://www.wowace.com/media/files/735/634/HandyNotes_HallowsEnd-v1.0.3.zip">скачать</a>
          }, {
            id: "CandyBuckets",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/Candy-Buckets-Hallows-End-mini.png'  )} />,
            text: <span>
              <h4>Candy Buckets (Hallow's End)</h4>
              <p>Помогает отслеживать недостающие конфеты</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://www.curseforge.com/media/files/643/314/CandyBuckets.zip">скачать</a>
          }, {
            id: "ReforgeLite",
            img: <Image src = {require ('../../image/bg_Addons/littleImgAddons/ReforgeLite-mini.jpg'  )} />,
            text: <span>
              <h4>ReforgeLite</h4>
              <p>Аддон для перековки. Очень сильно экономит время и нервы при перековке.</p>
            </span>,
            donload: <a href="http://www.allmmorpg.ru/go/?fileurl=http://www.wowace.com/media/files/734/401/ReforgeLite-v1.33.zip">скачать</a>
          }, 
        ]
      } 

  ];
}