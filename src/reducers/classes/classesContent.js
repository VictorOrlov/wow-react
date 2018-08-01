import React from 'react';
  
export default function() {
  return{
    warrior:{
      main_bg: ("bg_warrior"),
      paper_bg: ("paperDesc pabg_warrior"),
      name: "Воин",
      battleType: "Танк, боец",
      descChapter: "Мастера войны",
      descInfo: <p>В годы войны герои каждого из народов желали овладеть искусством боя. 
          Воины сильны, обладают отличными лидерскими качествами и прекрасно 
          умеют обращаться с оружием и доспехами. 
          Все это позволяет им задать врагам трепку в славной битве. 
          Некоторые воины предпочитают находиться на передовой, 
          защищаясь щитами и сдерживая врагов, пока идущие следом союзники 
          не поразят тех заклятьем или стрелой. Другие предпочитают сражаться в 
          рукопашной, полагаясь не на щиты, а на свое смертоносное оружие. </p>,
      descDesc: <p>Воины тщательно готовятся к бою, а с противником сражаются лицом к лицу,
          принимая все удары на свои доспехи. Они пользуются различными боевыми
          тактиками и применяют разнообразное оружие, чтобы защитить своих более
          хрупких союзников. Для максимальной эффективности воины должны 
          контролировать свою ярость — ту силу,
          что питает их наиболее опасные атаки. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Танк, боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, ярость</li><br/>
            <li><strong>Броня</strong><br/>Латы, щиты</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, кистевое оружие, топоры, дробящее, мечи, древковое оружие, посохи</li><br/>
            </ul>,
      features: <span>
            <h4>Защита</h4>
            <p>
            Могучие воины в бою полагаются на тяжелые доспехи, щиты и свои навыки.
             Их задача — не пропустить врага к менее защищенным членам отряда.
            </p><br/>

            <h4>Ближний бой</h4>
            <p>
            Мастерское владение оружием — самое главное для воина. 
            Он может нанести противнику огромный урон, 
            взяв одно тяжелое двуручное оружие или по оружию в каждую руку.
            </p><br/>

            <h4>Ярость</h4>
            <p>
            Когда воин получает урон, гнев его растет, 
            позволяя в разгар битвы наносить поистине сокрушительные удары.
            </p><br/>
          </span>
        },

    hunter:{
      main_bg: ("bg_hunter"),
      paper_bg: ("paperDesc pabg_hunter"),
      name: "Охотник",
      battleType: "Боец  ",
      descChapter: "Неумолимые преследователи",
      descInfo: <p>Зов природы звучит с незапамятных времен. 
          Те, кто слышит его, готовы променять домашний уют на вольную, 
          но опасную жизнь «дикарем». И если они выносят тяготы новой 
          жизни, то становятся охотниками. Зная природу как свои пять 
          пальцев, охотник может призраком проскользнуть меж деревьев и 
          установить ловушки на пути врага. </p>,
      descDesc: <p>Охотники бьют врага на расстоянии, приказывая питомцам 
          атаковать, пока сами натягивают тетиву или заряжают ружье. 
          Ружья и луки очень действенны и вблизи, и издалека. 
          Кроме того, охотники очень подвижны. Они могут уклониться от 
          атаки или задержать противника, чтобы выиграть время. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, концентрация</li><br/>
            <li><strong>Броня</strong><br/>Кольчуга</li><br/>
            <li><strong>Оружие</strong><br/>Луки, арбалеты, ружья, древковое</li><br/>
          </ul>,
      features: <span>
            <h4>Ближний бой</h4>
            <p>
            Охотники — бывалые следопыты. Они умеют пользоваться ядом, 
            взрывчаткой и ставить ловушки, чтобы наносить урон противнику 
            с короткого расстояния.
            </p><br/>

            <h4>Дальний бой</h4>
            <p>
            Владея луком, ружьем и арбалетом, охотник становится 
            смертельно опасен. Он может нанести противнику 
            колоссальный урон на расстоянии.
            </p><br/>

            <h4>Питомцы</h4>
            <p>
            Охотники приручают диких зверей, 
            которые служат им, нападая на врагов и 
            прикрывая своим телом хозяина.
            </p><br/>

            <h4>Одиночка</h4>
            <p>
            Благодаря питомцам и большому наносимому 
            урону охотники могут успешно выполнять задания и 
            повышать свой уровень, действуя в одиночку.
            </p><br/>
          </span>
        },
    
    priest:{
      main_bg: ("bg_priest"),
      paper_bg: ("paperDesc pabg_priest"),
      name: "Жрец",
      battleType: "Лекарь, боец",
      descChapter: "Хранители Света и Тьмы",
      descInfo: <p>Жрецы посвящают себя духовной жизни и доказывают 
          крепость веры, служа своему народу. 
          Тысячелетия назад они покинули покой храмов и уют святилищ,
          чтобы поддержать своих друзей на полях боя. 
          В разгаре сражения ни один герой не усомнится в 
          приказах жреца.</p>,
      descDesc: <p>Жрецы могут задействовать мощную целительную магию, 
          чтобы спасти себя и своих спутников. Им подвластны и 
          сильные атакующие заклинания, но физическая слабость и 
          отсутствие прочных доспехов заставляют жрецов бояться 
          сближения с противником. Опытные жрецы используют боевые 
          и контролирующие способности, не допуская гибели членов 
          отряда. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Лекарь, боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана, безумие</li><br/>
            <li><strong>Броня</strong><br/>Ткань</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, одноручное дробящее, посохи, жезлы</li><br/>
          </ul>,
      features: <span>
            <h4> Лечение </h4>
            <p>
            Жрецы пользуются священными силами, чтобы 
            восстанавливать свое здоровье и здоровье союзников.
            </p><br/>

            <h4>Дальний бой</h4>
            <p>
            Использование темной магии позволяет жрецам 
            мгновенно наносить огромный урон врагу или 
            растягивать причиняемую боль.
            </p><br/>

            <h4>Слова силы </h4>
            <p>
            Создавая магические щиты и взывая к великим 
            силам, жрецы могут отводить вред от себя и 
            своих союзников.
            </p><br/>

            <h4>Контроль над разумом</h4>
            <p>
            Устанавливая связь с разумом живых существ, 
            жрецы подчиняют их своей воле, используя тела 
            и умения жертв.
            </p><br/>
          </span>
    } ,
    
    shaman:{
      main_bg: ("bg_sham"),
      paper_bg: ("paperDesc pabg_sham"),
      name: "Шаман",
      battleType: "Лекарь, боец",
      descChapter: "Почитатели стихий",
      descInfo: <p>Шаманы — наставники в духовных практиках, идущих не от 
          богов, а от самих природных стихий. В отличие от других 
          мистиков, шаманы не обязательно общаются лишь с благоволящими 
          к ним силами. Стихии хаотичны: если их не сдерживать, они 
          сходятся друг с другом в бесконечной схватке. Задача шамана — 
          принести равновесие в этот хаос. Действуя в роли посредника 
          между землей, огнем, водой и воздухом, шаман создает тотемы, 
          которые увеличивают силы союзников или помогают уничтожать 
          врагов. </p>,
      descDesc: <p>В бою шаман ставит на землю контролирующие и наносящие урон 
          тотемы, чтобы помочь союзникам и ослабить противника. Шаманы 
          могут как вступать в ближний бой, так и атаковать с расстояния. 
          Мудрый шаман всегда старается учитывать сильные и слабые 
          стороны врага. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Лекарь, боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана, энергия Водоворота</li><br/>
            <li><strong>Броня</strong><br/>Кольчуга, щиты</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, кистевое, топоры, дробящее, посохи</li><br/>
          </ul>,
      features: <span>
            <h4>Лечение </h4>
            <p>
            При помощи внутренней духовной силы шаман может исцелять раненых друзей.
            </p><br/>

            <h4>Ближний бой </h4>
            <p>
            Шаманы придают своему оружию свойства стихий, заставляя его жечь, 
            морозить или иным образом ранить врага.
            </p><br/>

            <h4>Дальний бой</h4>
            <p>
            Шаман может использовать силы стихий, чтобы на расстоянии поразить 
            противника молнией, подземным толчком или извержением лавы.
            </p><br/>

            <h4>Тотемы </h4>
            <p>
            Тотемы шамана обладают массой положительных свойств: они увеличивают 
            скорость атаки, эффективность восстановления и наносимый противнику урон.
            </p><br/>
          </span>
    } ,
    
    warloc:{
      main_bg: ("bg_warloc"),
      paper_bg: ("paperDesc pabg_warloc"),
      name: "Чернокнижник",
      battleType: "Боец",
      descChapter: "Запретные силы",
      descInfo: <p>Перед лицом демонов большинство героев видят смерть. 
          Чернокнижники видят огромные возможности. Их цель — 
          власть, в ее достижении им помогают темные искусства. 
          Эти колдуны призывают демонов, которые сражаются 
          на их стороне. Сначала им доступны лишь слуги-бесы, 
          но по мере роста знаний чернокнижника ему начинают 
          подчиняться обольстительные суккубы, демоны бездны и 
          ужасные охотники Скверны, разя любого, кто выступит 
          против их хозяина. </p>,
      descDesc: <p>Чернокнижники уничтожают ослабленного противника, 
          сочетая увечащие болезни и темную магию. Находясь под 
          защитой своих питомцев, чернокнижники разят врага на расстоянии. 
          Физически слабые колдуны не могут носить тяжелую броню, 
          поэтому подставляют под вражеские удары своих слуг. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана, Осколки души</li><br/>
            <li><strong>Броня</strong><br/>Ткань</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, одноручные мечи, посохи, жезлы</li><br/>
          </ul>,
      features: <span>
            <h4>Призыв</h4>
            <p>
            Чернокнижники обладают способностью призывать на помощь 
            союзников — как других персонажей, так и кровожадных демонов.
            </p><br/>

            <h4>Дальний бой</h4>
            <p>
            Чернокнижники умеют проклинать своих врагов, замедляя их, 
            снижая силу их ударов и ослабляя защиту. Также они могут 
            красть здоровье противника, пополняя свои запасы
            </p><br/>

            <h4>Питомцы</h4>
            <p>
            Чернокнижники подчиняют своей воле демонов: обитатели 
            преисподней защищают своих хозяев и сражаются с их врагами.
            </p><br/>

            <h4>Демонические ресурсы</h4>
            <p>
            При помощи раскаленных углей, демонической ярости и Осколков 
            души чернокнижники усиливают свои заклинания, делая их более 
            стремительными и смертоносными.
            </p><br/>
          </span>
    } ,

    druid:{
      main_bg: ("bg_druid"),
      paper_bg: ("paperDesc pabg_druid"),
      name: "Друид",
      battleType: "Танк, лекарь, боец",
      descChapter: "Непокоренные оборотни",
      descInfo: <p>Друиды подчиняют себе силы природы, чтобы сберечь естественное 
          равновесие и защитить окружающий мир. Опытный друид способен 
          обрушить на врага чистую энергию природы, на огромном расстоянии 
          поразив его небесной бурей, сковав цепкими корнями деревьев или 
          оглушив яростным вихрем. </p>,
      descDesc: <p>Друиды могут подходить к сражению совершенно по-разному. 
          Они вольны играть почти любую роль в команде: быть целителями, 
          танками или бойцами, но должны помнить об особенностях каждой роли. 
          Друид вынужден внимательно подбирать облик к ситуации, так как 
          каждый из них служит определенной цели. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Танк, лекарь, боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана, гнев, энергия, астральная сила</li><br/>
            <li><strong>Броня</strong><br/>Кожа</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, кистевое оружие, дробящее оружие, древковое оружие, посохи</li><br/>
          </ul>,
      features: <span>
            <h4>Защита</h4>
            <p>
            В обличии медведя у друида толстая шкура и грозный вид. Он 
            может сражаться в первых рядах и защищать слабых членов команды.
            </p><br/>

            <h4>Лечение</h4>
            <p>
            C помощью сил природы друиды могут быстро восстановить 
            здоровье раненых товарищей.
            </p><br/>

            <h4>Ближний и дальний бой</h4>
            <p>
            Друиды могут принимать вид диких кошек, чтобы кусать врагов 
            и рвать их когтями, или превращаться в лунных совухов, чтобы 
            разить противника на расстоянии.
            </p><br/>

            <h4>Изменение облика</h4>
            <p>
            Cпособность друидов менять облик позволяет им играть разные 
            роли в команде: "танка", целителя или бойца. Также смена облика 
            дает возможность быстро передвигаться по суше, морю и воздуху. 
            </p><br/>
          </span>
    } ,
    
    paladin:{
      main_bg: ("bg_paladin"),
      paper_bg: ("paperDesc pabg_paladin"),
      name: "Паладин",
      battleType: "Танк, лекарь, боец",
      descChapter: "Оплот справедливости",
      descInfo: <p>Призвание паладина — защищать слабых, карать злодеев 
          и изгонять зло из самых темных уголков мира. В бою эти 
          воины Света полагаются на латы, способные защитить от 
          сильнейшего противника, и на благословение Света, 
          способное исцелять раны и даже воскрешать павших. </p>,
      descDesc: <p>Паладины бьются с врагом лицом к лицу, полагаясь на 
          тяжелые доспехи и навыки целительства. Прочный щит или 
          двуручное оружие — не столь важно, чем владеет паладин. 
          Он сумеет не только защитить соратников от вражеских 
          когтей и клинков, но и удержит группу на ногах при 
          помощи исцеляющих заклинаний. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Танк, лекарь, боец</li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана, энергия Света</li><br/>
            <li><strong>Броня</strong><br/>Латы, щиты</li><br/>
            <li><strong>Оружие</strong><br/>Топоры, дробящее, мечи, древковое</li><br/>
          </ul>,
      features: <span>
            <h4>Танк</h4>
            <p>
            Паладины используют самые тяжелые доспехи и щиты, 
            отвлекая на себя противника и защищая более слабых 
            членов отряда.
            </p><br/>

            <h4>Лечение</h4>
            <p>
            Паладины обладают могущественными способностями 
            целителя и помогают союзникам выстоять в бою.
            </p><br/>

            <h4>Ближний бой</h4>
            <p>
            Священная сила, которй паладины наполняют свое оружие, 
            увеличивает урон от наносимых ими ударов.
            </p><br/>

            <h4>Благословения и аура</h4>
            <p>
            Паладины, защитники порядка, очень эффективны в группе: 
            их благословения и ауры могут повысить наносимый урон и 
            повысить выживаемость и для них самих, и для их союзников.
            </p><br/>
          </span>
    } ,
    
    rogue:{
      main_bg: ("bg_rogue"),
      paper_bg: ("paperDesc pabg_rogue"),
      name: "Разбойник",
      battleType: "Боец",
      descChapter: "Скрытные преступники",
      descInfo: <p>Честь разбойника можно купить за золото, а единственный кодекс, 
          которому он следует, — контракт. Наемники не мучаются угрызениями 
          совести и поэтому используют жестокие и эффективные приемы. 
          Будучи умелыми убийцами и мастерами маскировки, они способны 
          подкрасться к цели сзади, нанести смертельный удар и исчезнуть, 
          прежде чем тело упадет на землю.  </p>,
      descDesc: <p>Разбойники часто нападают из теней, начиная бой комбинацией 
          свирепых ударов. В затяжном бою они изматывают врага тщательно 
          продуманной серией атак, прежде чем нанести решающий удар. 
          Разбойнику следует внимательно отнестись к выбору противника, 
          чтобы оптимально использовать тактику, и не упустить момент, 
          когда надо спрятаться или бежать, если ситуация складывается не 
          в их пользу. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, энергия, очки серии приемов</li><br/>
            <li><strong>Броня</strong><br/>Кожа</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, кистевое оружие, одноручные топоры, одноручное дробящее, одноручные мечи</li><br/>
          </ul>,
      features: <span>
            <h4>Ближний бой</h4>
            <p>
            Разбойники виртуозно управляются с оружием в каждой руке и могут 
            нанести врагу огромный урон.
            </p><br/>

            <h4>Незаметность </h4>
            <p>
            Скрываясь от противников, разбойники крадутся по полю битвы и 
            наносят неожиданные удары.
            </p><br/>

            <h4>Ускользание</h4>
            <p>
            Разбойник владеет целым арсеналом инструментов и уловок, позволяющих 
            в момент опасности скрыться от взглядов противников, и, если это 
            необходимо, избежать их атак.
            </p><br/>

            <h4>Серии приемов</h4>
            <p>
            Разбойники могут наносить приемы сериями, что позволяет сделать 
            завершающий удар поистине сокрушительным. 
            </p><br/>
          </span>
    } ,
    
    death_king:{
      main_bg: ("bg_dk"),
      paper_bg: ("paperDesc pabg_dk"),
      name: "Рыцарь смерти",
      battleType: "Танк, боец",
      descChapter: "Наследие рока",
      descInfo: <p>Когда Король-лич потерял контроль над рыцарями смерти, 
          его бывшие приспешники пожелали отомстить за весь ужас, 
          сотворенный по его приказу. После отмщения рыцари смерти 
          казались неприкаянными, потеряв все: и дом, и смысл жизни. 
          Один за другим они проникали на земли живых в поисках 
          новой цели.</p>,
      descDesc: <p>Рыцари смерти сходятся с противником в ближнем бою, 
          дополняя удары клинка темной магией, которая делает врага 
          уязвимым или ранит его нечестивой энергией. Они провоцируют 
          противников, вынуждая их сражаться один на один и не 
          подпуская их к более слабым союзникам. Чтобы не дать 
          противнику ускользнуть, рыцари смерти должны постоянно 
          помнить о силе, извлекаемой из рун, и соответствующим 
          образом направлять свои атаки. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Танк, боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, сила рун, руны</li><br/>
            <li><strong>Броня</strong><br/>Латы</li><br/>
            <li><strong>Оружие</strong><br/>Топоры, дробящее, мечи, древковое</li><br/>
          </ul>,
      features: <span>
            <h4>Защита</h4>
            <p>
            Чтобы защитить себя и своих союзников в бою, рыцари 
            смерти облачаются в тяжелые доспехи и парируют вражеские 
            атаки своими клинками.
            </p><br/>

            <h4>Ближний бой</h4>
            <p>
            Рунические клинки рыцарей смерти излучают темную магию; 
            в бою руны придают силу их ударам.
            </p><br/>

            <h4>Гравирование</h4>
            <p>
            Рыцари смерти связаны со своими клинками и могут высекать 
            на них руны, увеличивая силу оружия.
            </p><br/>
          </span>
    } ,
    
    mage:{
      main_bg: ("bg_mage"),
      paper_bg: ("paperDesc pabg_mage"),
      name: "Маг",
      battleType: "Боец",
      descChapter: "Повелители времени и пространства",
      descInfo: <p>Дисциплинированные ученики, наделенные острым умом, 
          могут избрать путь мага. Тайное волшебство, доступное 
          магу, сильно и очень опасно. Оно открывается только 
          достойным. Чтобы не мешать произнесению заклинаний, 
          маги носят только тканевые доспехи, которые могут дополнить 
          магическими щитами и заклятьями. Сражаясь с противником, 
          маг может использовать сгустки огня, поражающие даже 
          удаленные цели, и при желании обрушить огненный дождь 
          на целый вражеский отряд. </p>,
      descDesc: <p>Маги уничтожают врагов тайными заклинаниями. Несмотря 
          на магическую силу, маги хрупки, не носят тяжелых доспехов, 
          поэтому уязвимы в ближнем бою. Умные маги при помощи 
          заклинаний удерживают врага на расстоянии или вовсе 
          обездвиживают его. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана</li><br/>
            <li><strong>Броня</strong><br/>Ткань</li><br/>
            <li><strong>Оружие</strong><br/>Жезлы, кинжалы, одноручные мечи, посохи</li><br/>
          </ul>,
      features: <span>
            <h4>Урон в дальнем бою</h4>
            <p>
            Маги могут расходовать ману, очень быстро нанося противнику 
            огромный урон, но они должны быть осторожны, чтобы не истощить себя.
            </p><br/>

            <h4>Заклинания, действующие на область </h4>
            <p>
            Создавая глыбы льда, столбы пламени и шквалы тайной магии, 
            маги могут одновременно поражать нескольких врагов.
            </p><br/>

            <h4>Контроль</h4>
            <p>
            Маг, заставший противника врасплох на поле боя, может 
            действовать по-разному — скажем, заморозить его заживо 
            или превратить в безвредное животное.
            </p><br/>

            <h4>Телепортация</h4>
            <p>
            Маги обладают способностью перемещаться между городами и 
            создавать пищу и воду, где бы они ни находились.
            </p><br/>
          </span>
    } ,
    
    monah:{
      main_bg: ("bg_monk"),
      paper_bg: ("paperDesc pabg_monk"),
      name: "Монах",
      battleType: "Танк, лекарь, боец",
      descChapter: "Умиротворенные бойцы",
      descInfo: <p>Несколько столетий назад пандарены были порабощены империей 
          могу. Именно монахи впоследствии принесли пандаренам надежду, 
          и их будущее перестало быть таким беспросветным. Пандарены-монахи не 
          могли использовать оружие (могу не позволяли им этого), и поэтому 
          они сосредоточились на изучении энергии ци и ведении боя без оружия. 
          Когда появилась возможность осуществить революцию, монахи были 
          прекрасно подготовлены к тому, чтобы сбросить иго поработителей. </p>,
      descDesc: <p>Вне зависимости от предпочитаемого стиля монахи в бою полагаются 
          в основном на свои кулаки и ноги, а связь с внутренней энергией ци 
          придает им сил для использования особых способностей. Например, 
          способности «Устранение вреда» и «Волна ци» одновременно исцеляют 
          союзников и наносят урон противникам. </p>,
      charList: <ul>
            <li><strong>Тип</strong><br/> Танк, лекарь, боец</li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, ци, энергия, мана</li><br/>
            <li><strong>Броня</strong><br/>Кожа</li><br/>
            <li><strong>Оружие</strong><br/>Кистевое оружие, одноручные топоры, одноручное дробящее, одноручные мечи, древковое оружие, посохи</li><br/>
          </ul>,
      features: <span>
            <h4>Ближний бой</h4>
            <p>
            Мастерство дзэн позволяет монахам наносить противнику 
            максимальный урон одним метким и изящным ударом.
            </p><br/>

            <h4>Танк</h4>
            <p>
            Чтобы защитить союзников, доблестные и крепкие монахи 
            отвлекают врага дурманящими напитками и необъяснимой 
            неуловимостью.
            </p><br/>

            <h4>Лекарь</h4>
            <p>
            Монахи могут исцелять раненых друзей с помощью мистической 
            силы, которую они умело направляют.
            </p><br/>
          </span>
    }
  };
}