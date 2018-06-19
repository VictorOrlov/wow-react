import React from 'react';
import { Image } from 'react-bootstrap';

export default function() {
  return[
    {
      id: "Blacksmith",
      name: "Кузнечное Дело",
      style: ("butBlacksmith but"),
      info: <span className="itemInfo">
        <h2>Кузнечное дело <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Blacksmith.png'  )} /></h2>
        <p>С помощью молота и наковальни мастеровитые кузнецы могут 
        создавать смертельное оружие, кольчугу и латные доспехи, а 
        также другие, особые предметы. Они могут изменять и свои 
        собственные доспехи путем добавления новых гнезд для магических 
        камней. За счет своей профессии кузнецы могут экипироваться 
        сами (особенно если они носят тяжелые доспехи)
        и помочь экипироваться товарищам по группе или гильдии. 
        Кроме того, кузнецы могут продавать свои изделия на аукционе.
        Для большинства доспехов и оружия кузнецу требуется кузнечный 
        молот (продается у торговцев) и наковальня. Наковальни и горны 
        для переплавки руды следует искать в больших 
        и маленьких городах.</p>
        
        <p>В качестве второй профессии кузнецы часто выбирают горное дело , 
        поскольку руда,  которую можно добыть из залежей 
        полезных ископаемых, — ключевой 
        компонент для создания большинства доспехов и оружия.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
       Прежде чем приступить к работе, убедитесь, что у вас есть все 
       необходимые материалы для создания оружия или брони (обычно 
        это слитки металла). Не забывайте, что чаще всего для работы 
       вам понадобится кузнечный молот — его можно купить у торговцев 
       хозяйственными товарами.</p>

        <p><bold>Шаг 2 :</bold><br/>
        После этого вам нужно найти наковальню. Обычно они 
        располагаются в крупных городах, но их можно найти 
        и в большинстве мелких поселений.</p>
        
        <p><bold>Шаг 3 :</bold><br/>
        Щелкните по ссылке «Кузнечное дело» в меню 
        профессий, выберите необходимый рецепт и нажмите 
        кнопку «Создать».</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Оружие и доспехи</bold><br/>
        Кольчужные или латные доспехи, щиты и другая 
        защитная экипировка; мечи, кинжалы, топоры и 
        прочие опасные для жизни железяки. Самыми мощными 
        предметами может пользоваться только сам кузнец, 
        который их выковал.</p>
        <p><bold>Ключи</bold><br/>
        С помощью ключей можно открывать сундуки и сейфы, 
        где хранятся сокровища.</p>
        <p><bold>Точильные камни</bold><br/>
        Позволяют ненадолго увеличить урон, наносимый 
        оружием ближнего боя .</p>
        <p><bold>Создание гнезд для камней</bold><br/>
        Кузнецы могут создавать в экипировке дополнительные 
        гнезда под магические камни</p><br/><br/><br/>
        
      </span>
    }, {
      id: "Enchantment",
      name: "Наложение чар",
      style: ("butEnchantment but"),
      info: <span className="itemInfo">
        <h2>Наложение чар <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Enchantment.png'  )} /></h2>
        <p>Зачаровыватели распыляют магические предметы на составные части и 
        используют получившиеся субстанции для наложения чар на выбранные ими 
        доспехи или оружие.  При наличии необходимых формул чар 
        и материалов зачаровыватель может усилить определенные характеристики 
        предметов, увеличивая силу оружия, скорость боя и сопротивление 
        разнообразным видам магии. Предприимчивые зачаровыватели продают 
        другим героям свои услуги, цены на которые зависят от сложности 
        работы. Зачаровыватели работают с тем, что осталось после распыления        
        магических предметов. Чем больше мощи было заключено в таком предмете, тем 
        ценнее получившиеся субстанции. Кроме того, чтобы направлять магическую энергию, 
        зачаровывателям необходимы волшебные жезлы.</p>

        <p>Наложение чар не зависит от какой бы то ни было добывающей профессии,
        так что зачастую в качестве второй основной профессии зачаровыватели выбирают портняжное дело,
        которое позволяет им быстро создавать магические предметы для распыления.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Убедитесь в том, что вы выучили формулу чар, 
        которые хотите наложить, и что у вас в наличии 
        имеются все необходимые материалы и жезлы. 
        Некоторые ингредиенты для наложения чар можно 
        купить у торговцев, но магические порошки и 
        субстанции, основной компонент для работы 
        зачаровывателя, можно получить либо путем 
        распыления магических предметов, либо приобрести 
        на аукционе.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Чтобы извлечь магическую сущность предмета, его 
        необходимо распылить. Для этого выберите желаемый 
        предмет (он должен быть как минимум необычного 
        качества), щелкните по значку «Распылить» в меню 
        профессии, а потом по выбранному предмету. Предмет 
        будет уничтожен, а вы получите магические 
        компоненты, которые позволят вам накладывать чары.</p>
        
        <p><bold>Шаг 3 :</bold><br/>
        Чтобы наложить чары на предмет, поместите его в сумки 
        либо наденьте на себя (если вы зачаровываете предмет 
        для другого игрока, ему надо будет положить выбранную 
        вещь в специальную ячейку окна обмена). После этого 
        щелкните по значку «Наложение чар» в меню профессий, 
        выберите необходимую формулу наложения чар и щелкните 
        по предмету, который вы хотите зачаровать.</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Чары для колец</bold><br/>
        Зачаровыватель накладывает могущественные чары 
        на кольца, но затем их сможет использовать 
        только сам зачаровыватель.</p>
        
        <p><bold>Распыление</bold><br/>
        Вы можете распылить любой магический предмет на 
        составные части, которые пригодятся вам для 
        наложения чар (или продажи).</p>
        
        <p><bold>Наложение чар на оружие</bold><br/>
        Позволяет наносить больше урона в бою или повышает 
        определенные характеристики.</p>
        
        <p><bold>Наложение чар на доспехи</bold><br/>
        Усиливает броню или сопротивление различным 
        видам магии.</p>

        <p><bold>Масла</bold><br/>
        Расходуемые предметы, которые при наложении на оружие 
        могут ускорить восстановление маны, увеличить урон или 
        исцеляющую силу заклинаний.</p>

        <p><bold>Жезлы и аксессуары</bold><br/>
        Зачаровыватель может создавать волшебные жезлы, 
        используемые заклинателями, или аксессуары, которыми 
        могут пользоваться все классы.</p><br/><br/><br/>
      </span>
    }, {
      id: "Engineering",
      name: "Инженерное дело",
      style: ("butEngineering but"),
      info: <span className="itemInfo">
        <h2>Инженерное дело <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Engineering.png'  )} /></h2>
        <p>В своей непревзойденной изобретательности инженеры умеют 
        создавать множество полезных, а порой совершенно 
        невероятных вещей. Они готовы часами возиться 
        с инструментами и никогда не опускают руки, 
        когда что-нибудь ломается или идет наперекосяк. 
        Поэтому для них не представляет труда изготовить 
        какую-нибудь причудливую штуковину — очки для обострения 
        зрения, мощные ружья, механических зверушек, 
        верховых животных и прочие диковинные аксессуары.
        Изобретения талантливых инженеров существенно упрощают 
        жизнь самим инженерам и их товарищам. 
        С ними легче и быстрее решить любую проблему.</p>
        
        <p>Большинство инженерных приспособлений можно создавать 
        где угодно, если у вас есть все необходимые материалы.
        Зачастую инженеры выбирают в качестве второй основной 
        профессии горное дело,
        поскольку металлы и руды используются в качестве сырья при 
        сборке изобретений.
        Когда вы разовьете навык инженерного дела, то после выполнения
        особого задания вы сможете выбрать специализацию: гномскую и 
        гоблинскую инженерную школу. 
        Каждая школа специализируется на создании определенного вида предметов; 
        технологии тщательно скрываются от конкурентов.</p>
      </span>,
      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Убедитесь, что вы изучили нужную схему и у вас есть под 
        рукой все необходимые материалы. Большинство материалов, 
        которые требуются для работы инженера, можно добыть с 
        помощью горного дела, а другие купить у торговцев или на 
        аукционе.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Если у вас есть все, что нужно, вы можете приступить к 
        работе почти где угодно. Щелкните по значку «Инженерное 
        дело» в меню профессий, выберите желаемую схему и нажмите 
        на кнопку «Создать».</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Оружие</bold><br/>
        Огнестрельное оружие и прицелы.</p>
        
        <p><bold>Все, что надевается на голову</bold><br/>
        Очки, монокли и другие предметы, защищающие голову и 
        повышающие определенные характеристики.</p>
        
        <p><bold>Взрывчатка</bold><br/>
        Бомбы, динамит и другие расходуемые взрывчатые вещества.</p>
        
        <p><bold>Средства передвижения</bold><br/>
        Летательные аппараты, реактивные сапоги и прочие 
        средства передвижения.</p>

        <p><bold>Спутники</bold><br/>
        Декоративные питомцы-спутники ручной работы, которые 
        повсюду следуют за вами.</p>

        <p><bold>Прочее</bold><br/>
        Особые аксессуары, которые задерживают врагов, 
        позволяют покупать и продавать вещи, находясь вне 
        городских стен, и т.д.</p><br/><br/><br/>
      </span>
    }, {
      id: "Herbalism",
      name: "Травничество",
      style: ("butHerbalism but"),
      info: <span className="itemInfo">
        <h2>Травничество <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Herbalism.png'  )} /></h2>
        <p>Травники аккуратно собирают полезные травы, растущие по всему миру. 
        У представителей этой профессии необычайно обостренные чувства: 
        они позволяют им безошибочно находить самые редкие и ценные растения, 
        которые затем мастера других профессий используют для своих изделий. 
        Травники могут снабжать себя и свою группу или гильдию реагентами. 
        Кроме того, травы можно продавать или обменивать их на другие реагенты.
        Благодаря особому чутью на растения травники могут видеть полезные растения на миникарте.  
        Чтобы собрать нужное растение, достаточно просто щелкнуть по нему правой кнопкой мыши. 
        Для этого не нужны никакие специальные инструменты.  
        Ваш навык травничества повышается, когда вы собираете растения, 
        которые знаете хуже всего; чтобы собрать лучшие образцы флоры, 
        вам придется попотеть!</p>
        
        <p>Травы растут практически по всему Азероту, хотя некоторые 
        местности более щедры на них, чем другие.
        Определенные редкие травы может быть нелегко отыскать, 
        и на аукционе на них обычно устанавливают высокие цены, 
        однако из них получаются особенно мощные зелья.</p>
      </span>,
      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Активируйте способность «Поиск трав» во время путешествий: это 
        позволит вам отыскивать полезные растения. Когда вы будете 
        достаточно близко, они будут отмечены на вашей миникарте.</p>

        <p><bold>Шаг 2 :</bold><br/>
       Как только вы обнаружили растение, подойдите к нему поближе 
       и щелкните правой кнопкой мыши, чтобы собрать его.
</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Реагенты</bold><br/>
        Травы используются, прежде всего алхимиками и начертателями, 
        для создания различных предметов.</p>
        
        <p><bold>Прибыль</bold><br/>
        Поскольку травы нужны всем, их можно продать или выменять на 
        что-нибудь нужное.</p>
        
        <p><bold>«Кровь земли»</bold><br/>
        Травники-умельцы могут использовать способность «Кровь земли» 
        для самоисцеления и увеличения скорости атаки.</p>
        <br/><br/><br/>
      </span>
    }, {
      id: "Incsription",
      name: "Начертание",
      style: ("butIncsription but"),
      info: <span className="itemInfo">
        <h2>Начертание <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Incsription.png'  )} /></h2>
        <p>Начертатели создают символы, улучшающие способности героев и дающие им новые возможности.
        Иногда с помощью символов можно развить уникальные способности, 
        которые нельзя получить никак иначе.
        Вкладывая свою силу в чернила, начертатели также могут создавать расходуемые свитки,
        магические фолианты и материалы для свитков наложения чар, позволяющие передавать чары другим.
        Как и наложение чар, начертание помогает бывалым героям улучшить свои показатели.
        Разница между этими профессиями состоит в том, что начертание повышает классовые характеристики,
        а не характеристики экипировки.</p>
        
        <p>Для создания свитков и символов вам понадобятся красители, которые можно получить из измельченных трав
         – поэтому начертатели зачастую являются также и талантливыми травниками.
         Кроме того, чтобы создать могущественные письмена, вам будет необходим набор начертателя.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Убедитесь, что изучили необходимую технику начертания и имеете 
        достаточно красителей, пергамента и других особых материалов, 
        которые требуются для создания свитка или символа, а также набор 
        начертателя. Пергамент можно купить у торговца, а чернила сделать 
        из красителей, которые продаются на аукционе или добываются из 
        измельченных трав.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Красители получаются из трав путем их измельчения. Для этого 
        выберите растение, находящееся у вас в сумках, при задействованной 
        способности «Измельчить» (надо щелкнуть по соответствующему значку 
          в меню профессий). Вы переработаете травы в красители, которые 
        сможете использовать для создания начертательских предметов.</p>
        
        <p><bold>Шаг 3 :</bold><br/>
        Если у вас есть все необходимые реагенты, вы можете создавать 
        свитки и все остальное практически в любом месте и в любое 
        время: просто щелкните по значку «Начертание» в меню профессий, 
        выберите необходимую технику начертания и нажмите на кнопку «Создать».</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Измельчение</bold><br/>
        Начертатели могут измельчать травы и превращать их в таинственные 
        красители, которые пригодятся для создания свитков и символов 
        (или для продажи)</p>
        
        <p><bold>Символы</bold><br/>
        Повышают характеристики и улучшают способности всех классов. 
        Они позволяют наносить больше урона, снижают время произнесения 
        заклинаний и дают множество других преимуществ.</p>
        
        <p><bold>Материалы для свитков наложения чар</bold><br/>
        Свитки используются для хранения чар с целью обмена или продажи.</p>
        
        <p><bold>Карты</bold><br/>
        Редкие карты, которые можно обменять на волшебные аксессуары или 
        оружие на ярмарке Новолуния.</p>

        <p><bold>Фолианты</bold><br/>
        РПредметы, которые можно носить в левой руке. Они повышают 
        некоторые характеристики и могут наделять своего владельца 
        особыми возможностями.</p>

        <p><bold>Усиление</bold><br/>
        Начертатели могут усиливать некоторые предметы своей экипировки 
        магическими письменами.</p><br/><br/><br/>
      </span>
    }, {
      id: "Jevelcrafting",
      name: "Ювелирное дело",
      style: ("butJevelcrafting but"),
      info: <span className="itemInfo">
        <h2>Ювелирное дело <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Jevelcrafting.png'  )} /></h2>
        <p>Ювелиры способны открывать миру удивительную силу драгоценных камней,
         создавать могущественные украшения и аксессуары. 
         Они делают кольца, амулеты и другие вещицы, обладающие магической силой,
         а также ограняют камни, которые можно вставить в гнезда в оружии или доспехах и которые придают им особые свойства.
         Талантливый ювелир может рассчитывать на постоянный спрос на создание особых предметов,
         улучшающих свойства экипировки, и огранку редких камней.
         Множество камней, необходимых для занятия ювелирным делом, 
         можно обнаружить при разработке месторождений полезных ископаемых, 
         поэтому зачастую ювелиры занимаются горным делом. 
         Для работы им требуется набор ювелира.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Чтобы создать украшение или огранить камень, нужно выучить 
        соответствующий эскиз и иметь под рукой все камни, руды или 
        другие материалы, перечисленные в списке. Руду можно 
        получить с помощью горного дела (или купить на аукционе), 
        а камни надо либо найти, либо купить на аукционе, либо, 
        чаще всего, добыть путем просеивания руд.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Просеивание руд и поиск в них драгоценных камней происходит 
        следующим образом: чтобы просеять руду, находящуюся у вас в 
        сумках, выберите значок «Просеивание» в меню профессий. Вы 
        израсходуете руду, но получите камни, необходимые для создания 
        украшений.</p>
        
        <p><bold>Шаг 3 :</bold><br/>
        Если у вас есть все необходимые материалы для создания 
        того или иного украшения, вы можете сделать его где и когда 
        угодно: просто щелкните по значку «Ювелирное дело» в меню 
        профессий, выберите предмет, который вы хотите создать или 
        камень, который хотите огранить, и нажмите на кнопку «Создать».</p>
       
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Резьба по камню</bold><br/>
        Ювелиры способны огранить и придать форму волшебным камням, 
        которые при вставке в специальные гнезда повышают определенные
        характеристики предметов.</p>
        <p><bold>Эксклюзивные драгоценные камни</bold><br/>
        Носить драгоценные камни в оправе могут персонажи всех классов, 
        но только ювелиры могут создавать особые камни, гораздо 
        могущественнее обыкновенных.</p>
        <p><bold>Статуэтки</bold><br/>
        Это волшебные исцеляющие предметы, которые могут использоваться 
        только самим ювелиром.</p>
        <p><bold>Изготовление украшений</bold><br/>
        Создание колец, ожерелий и множества других полезных аксессуаров.</p><br/><br/><br/>
        
      </span>
    }, {
      id: "Leather",
      name: "Кожевничество",
      style: ("butLeather but"),
      info: <span className="itemInfo">
        <h2>Кожевничество <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Leather.png'  )} /></h2>
        <p>Кожевники создают разнообразные полезные вещи из грубой, шершавой и жесткой кожи. 
        В основном они мастерят легкие кожаные и кольчужные доспехи, но не только: 
        они также шьют плащи, сумки и накладки на доспехи, повышающие показатели брони. 
        Искусство создания кожаных доспехов будет полезно как тем, кто хочет одеться сам и одеть других, так и тем,
        кто хочет разбогатеть на продаже редкой экипировки.
        Заниматься созданием изделий из кожи можно практически где угодно, если у вас есть все необходимое. 
        Зачастую в качестве вспомогательного навыка кожевники выбирают снятие шкур, 
        поскольку это самый простой способ разжиться материалами.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Вам потребуется выкройка предмета, который хотите создать, и 
        материалы: кожа, шкуры, соль и прочие реагенты, перечисленные 
        в списке. Запас кожи у вас всегда будет, если вы владеете 
        профессией «снятие шкур» (в противном случае кожи можно купить 
          на аукционе), а все остальное можно приобрести у торговцев.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Если у вас есть все необходимые материалы, вы можете работать 
        с кожей где и когда угодно: щелкните по значку «Кожевничество» 
        в меню профессий, выберите предмет, который хотите изготовить, 
        и нажмите на кнопку «Создать».</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Доспехи</bold><br/>
        Кожаные и кольчужные доспехи и плащи.</p>
        <p><bold>Накладки</bold><br/>
        Особые накладки, которые можно использовать один раз, улучшают 
        свойста доспехов. Некоторые накладки может использовать только 
        кожевник на собственных доспехах.</p>
        <p><bold>Сумки</bold><br/>
        В сумках можно унести больше предметов.</p>
        <p><bold>Особые доспехи</bold><br/>
        Кожевники могут создавать особые доспехи лично для себя.</p><br/><br/><br/>
        
      </span>
    }, {
      id: "Mining",
      name: "Горное дело",
      style: ("butMining but"),
      info: <span className="itemInfo">
      <h2>Горное дело <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Mining.png'  )} /></h2>
        <p>Горняки находят ценные и полезные руды и извлекают их из недр земных.
        Они «чувствуют» землю, так что найти богатые золотые, 
        серебряные жилы и месторождения более ценных металлов не составляет для них никакого труда. 
        Они добывают и переплавляют эти металлы на продажу или для дальнейшей работы с ними.</p>
        
        <p>Горняки могут обнаруживать залежи руды с помощью способности «Поиск минералов» 
        (тогда они будут показываться на миникарте) и выкапывать их
         (для этого надо щелкнуть правой кнопкой мыши на жиле).
        Чтобы разбивать камни и получать ценную руду, горнякам понадобится шахтерская кирка,
        а для переплавки руды в слитки металлов нужно находиться рядом с горном. Горны обычно располагаются в городах.
        По мере того как ваш навык будет расти, вы сможете создавать сплавы различных металлов — 
        и за счет этого опять-таки будет повышаться ваше умение. 
        Чтобы выкопать наиболее редкие руды, нужны все ваши знания!</p>
        
        <p>Горное дело — добывающая профессия. 
        Зачастую к ней присовокупляют ювелирное, инженерное или кузнечное дело.
        Залежи руд можно найти по всему Азероту, хотя в некоторых местах их больше, чем в других.
        Ценные и редкие руды встречаются реже, но они того стоят:
        их можно дорого продать или выплавить из них дорогостоящие металлы.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Когда отправляетесь в путешествие, активируйте способность 
        «Поиск минералов». Вы будете видеть залежи руд на миникарте.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Когда обнаружите залежи руды, подойдите к ним поближе и 
        щелкните по залежам, чтобы собрать руду. Для этого вам 
        необходимо иметь при себе шахтерскую кирку.</p>
        
        <p><bold>Шаг 3 :</bold><br/>
        Вы увидите окошко с собранными материалами — рудой или 
        камнями.</p>
        
        <p><bold>Шаг 4 :</bold><br/>
        Если вы хотите переплавить руду в слитки, чтобы использовать 
        их для другой профессии или продать, разыщите где-нибудь горн 
        (проще всего — в городах), щелкните по значку «Выплавка металлов» 
        в меню профессий и выберите руду, которую хотите переплавить.</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Реагенты</bold><br/>
        Руда, слитки и камни необходимы для 
        самых разных профессий.</p>
        <p><bold>Прибыль</bold><br/>
        Руды нужны мастерам разных профессий, 
        так что их можно выгодно продавать или обменивать.</p>
        <p><bold>«Крепость»</bold><br/>
        Самые опытные горняки приобретают способность «Крепость», 
        которая навсегда повышает их выносливость.</p><br/><br/><br/>
        
      </span>
    }, {
      id: "Skinning",
      name: "Снятие шкур",
      style: ("butSkinning but"),
      info: <span className="itemInfo">
      <h2>Снятие шкур <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Skinning.png'  )} /></h2>
        <p>Мастера снятия шкур следят, чтобы ничто не пропало зря. 
        Поэтому с убитых животных они снимают шкуры — запасаются мехом и кожей.
        Снятие шкур — самая подходящая и удобная профессия для тех, кто и так занимается охотой. 
        Кроме того, она весьма полезна. 
        Шкуры экзотических животных (например, драконов) ценятся крайне высоко
        и требуются для создания доспехов из кожи. 
        В ряде других профессий они тоже необходимы.
        Чтобы снять шкуру, мастеру требуется специальный нож 
        (если он у вас есть, то просто щелкните по трупу животного правой кнопкой мыши). 
        Не со всех зверей можно снять шкуру, но с большинства все-таки можно — 
        и для этого даже не обязательно убивать их самому.
        Навык снятия шкур будет повышаться по мере того,
        как вы будете освежевывать все более редких и опасных зверей. 
        Этот опыт понадобится вам для того, чтобы снять шкуру с животных высокого уровня.</p>
        
        <p>Снятие шкур — добывающая профессия. 
        Параллельно мастера снятия шкур, как правило, 
        занимаются кожевничеством, хотя портным кожи тоже могут пригодиться.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Подойдите к убитому зверю, дракону или насекомому. Если у вас 
        есть нож для снятия шкур и вы приблизились на достаточное 
        расстояние, то указатель мыши примет форму ножа.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Щелкните правой кнопкой мыши на убитом животном, чтобы 
        освежевать его, — и вы получите шкуру или кожу.</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        
        <p><bold>Реагенты</bold><br/>
        Кожа, шкуры и прочее сырье, необходимое представителям разных 
        профессий, особенно кожевникам.</p>

        <p><bold>Прибыль</bold><br/>
        Шкуры востребованы в разных ремеслах. Вы всегда сможете их 
        выгодно продать или обменять.</p>

        <p><bold>«Знаток анатомии»</bold><br/>
        Опытные мастера снятия шкур приобретают способность «Знаток анатомии», 
        которая повышает вероятность нанесения критического удара.</p><br/><br/><br/>
      </span>
    }, {
      id: "Tailloring",
      name: "Портняжное дело",
      style: ("butTailloring but"),
      info: <span className="itemInfo">
        <h2>Портняжное дело <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Tailloring.png'  )} /></h2>
        <p>Портные превращают обычную ткань в произведение искусства: 
        тканевые доспехи и мантии, рубашки, сумки и прочее. 
        Их работа нужна всем: классы, специализирующиеся на легкой броне, 
        могут носить волшебные мантии, новым вместительным сумкам будут рады все герои без исключения, 
        да и просто красивые обновки порадуют и того, кто их носит, и окружающих.
        Чтобы быть портным, не нужно владеть дополнительными профессиями, 
        поскольку ткань можно найти в сундуках или снять с павших врагов. 
        Кроме того, ее можно купить. Портняжное дело можно сочетать с множеством других профессий, 
        но чаще всего игроки выбирают наложение чар.</p>
        
        <p>Большинство портняжных работ можно выполнять где угодно при условии, 
        что у вас есть все необходимые для этого материалы.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Чтобы что-нибудь сшить, вам понадобится изучить выкройку и 
        добыть ткань, краску и другие материалы, перечисленные в меню 
        профессии. Ткань можно снять с трупов врагов (или купить на аукционе), 
        а другие материалы — приобрести у торговцев.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Когда вы соберете все необходимое для шитья, вы можете приниматься 
        за дело где и когда угодно: просто щелкните по значку «Портняжное дело» 
        в меню профессий, выберите предмет, который хотите сшить, и нажмите на 
        кнопку «Создать».</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>

        <p><bold>Доспехи</bold><br/>
        Тканевые доспехи (мантии, перчатки, шлемы, сапоги, рубашки и наплечники).</p>
        
        <p><bold>Сумки</bold><br/>
        Чем больше у вас сумки, тем больше предметов вы можете унести.
         А сумки в основном и шьют портные.</p>
        
        <p><bold>Одежда</bold><br/>
        В рубашке, смокинге или платье вы будете чувствовать себя 
        особенно и выделяться из толпы.
</p>
        
        <p><bold>Средства передвижения</bold><br/>
        Портные могут соткать волшебное средство передвижения — 
        ковер-самолет.
</p>

        <p><bold>Вышивка</bold><br/>
        Вышивка волшебной нитью может повысить характеристики 
        предметов.</p><br/><br/><br/>
      </span>
    }, {
      id: "Alchemy",
      name: "Алхимия",
      style: ("butAlchemy but"),
      info: <span className="itemInfo">
        <h2>Алхимия <Image src = {require ('../../image/bg_tabletProfs/pngICONS/Alchemy.png'  )} /></h2>
        <p>Алхимики используют травы для создания странных магических зелий, которые могут исцелять,
        наделять силой и вызывать наложение разнообразных положительных эффектов.
        Кроме того, алхимики могут изменять сущность некоторых материалов и превращать их в более редкие.
        Мастера этой профессии, умеющие создавать ценные расходуемые предметы (те, которые можно использовать лишь единожды),
        практически незаменимы в группах и рейдах. 
        Они могут заработать кучу денег на создании редких материалов,
        необходимых для ковки мощного оружия и брони, и даже оказывать влияние на экономику Азерота!
        Большинство алхимических зелий можно варить где угодно, если у вас есть необходимые для этого реагенты — 
        материалы для работы, которые можно купить у торговцев и других игроков или собрать в игре.
        Часто в качестве второй основной профессии алхимики выбирают травничество, поскольку травы, растущие по всему Азероту и за его пределами,
        служат необходимыми компонентами для большинства алхимических смесей.</p>
        
        <p>Когда вы накопите достаточно опыта, вы сможете выбрать специализацию. 
        Выполнив специальное задание, вы сможете выбрать одну из трех алхимических специализаций: трансмутациию, создание зелий или эликсиров. 
        Алхимик, специализирующийся в определенной области, с некоторой вероятностью создаст дополнительные зелья или материалы,
         соответствующие его специализации.</p>
      </span>,

      manual: <span className="itemManual">
        <h4>РУКОВОДСТВО</h4>
        <p><bold>Шаг 1 :</bold><br/>
        Соберите или приобретите ингредиенты, необходимые для варки 
        нужных вам зелий. Узнать, какие реагенты вам нужны, можно из 
        меню профессии.</p>

        <p><bold>Шаг 2 :</bold><br/>
        Для создания большинства алхимических зелий необходимы травы. 
        Их можно собирать в игре или покупать на аукционе. Для некоторых 
        вам потребуются особые материалы (например, разнообразные сосуды),
         которые можно приобрести у торговцев.</p>
        
        <p><bold>Шаг 3 :</bold><br/>
        Чтобы сварить зелье, перейдите по ссылке «Алхимия» в меню профессий, 
        выберите нужный рецепт, задайте требуемое количество порций и щелкните 
        по кнопке «Создать».</p>
      </span>,

      advantage: <span className="itemAdvantage">
        <h4>Преимущества</h4><hr/>
        <p><bold>Философские камни</bold><br/>
        Этими мощными аксессуарами может пользоваться только сам алхимик, 
        который их создал.</p>
        
        <p><bold>Зелья</bold><br/>
        Зелья способны исцелять или восстанавливать такие ресурсы, как мана 
        и энергия. Некоторые зелья дают особые преимущества; употреблять их 
        может только тот, кто знаком с основами алхимии.</p>
        
        <p><bold>Эликсиры и настои</bold><br/>
        Накладывают положительные эффекты средней длительности (например, 
          повышают показатели брони или ловкости). Действие некоторых из них 
        сохраняется даже после смерти персонажа.</p>
        
        <p><bold>Масла</bold><br/>
        Масла, нанесенные на оружие, повышают его эффективность и увеличивают 
        наносимый урон.</p>

        <p><bold>Котлы</bold><br/>
        В котлах можно варить сразу много зелья — для целой группы или рейда.</p>

        <p><bold>Трансмутация</bold><br/>
        С помощью трансмутации вы можете превращать металлы и редкие минералы 
        во что-нибудь другое.</p><br/><br/><br/>
      </span>
    }, 

  ];
}