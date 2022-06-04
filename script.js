let products = [
  {href: 'product1.html',image: 's1.jpg',name: 'Сабля Абордажная',price: '4500', info: 'Сталь 65Г. Закалка 50 HRC. Шлифовка. Рукоять сабли обмотана кожей. Острие скруглено на 25 мм.'},
  {href: 'product2.html',image: 's2.jpg',name: 'Сабля Польская',price: '4700', info: 'Сталь 65Г. Закалка 50 HRC.Шлифовка. Рукоять обмотана кожей.Острие скруглено на 25 мм.Конструкция данной сабли подходит под общепринятые турнирные правила.'},
  {href: 'product3.html',image: 's3.jpg',name: 'Катана спортивная',price: '4500', info: 'Сталь 65Г, шлифовка, закалка, твердость клинка 50 HRC. Рукоять катаны обмотана кожей. Цуба круглая. Эфес сварной неразборный.'},
  {href: 'product4.html',image: 's4.jpg',name: 'Вакидзаси ',price: '3900', info: 'Сталь 65Г, шлифовка, закалка, твердость клинка 50 HRC.Рукоять вакидзаси обмотана кожей.Цуба круглая.Эфес сварной неразборный.'},
  {href: 'product5.html',image: 's5.jpg',name: 'Грандфальшион',price: '9600', info: 'Сталь 65Г. Закалка 50 HRC. Шлифовка. Рукоять имеет две приклепанные накладки из мореного дерева.'},
  {href: 'product5.html',image: 's6.jpg',name: 'Каролинг тип X',price: '3900', info: 'Данная модель обеспечивает возможность нарабатывания навыков фехтования характерных для раннего средневековья.Конструкция данного меча подходит под общепринятые турнирные правила.'},
  {href: 'product1.html',image: 's7.jpg',name: 'Каролинг тип Z',price: '3900', info: 'Данная модель обеспечивает возможность нарабатывания навыков фехтования характерных для раннего средневековья.Конструкция данного меча подходит под общепринятые турнирные правила.'},
  {href: 'product1.html',image: 's8.jpg',name: 'Меч Романский',price: '3600', info: 'Длинная рукоять с изогнутой гардой обеспечивает комфортное фехтование с латной варежке или перчатке.Данная модель обеспечивает возможность нарабатывания навыков фехтования характерных для позднего средневековья.'},
  {href: 'product1.html',image: 's9.jpg',name: 'Фальшион тип III',price: '3900', info: 'Этот тип выглядит на первый взгляд очень похожим по форме на фальшионы I типа, но они на самом деле совершенно другие.У фальшионов третьего типа полностью заточенная кромка находится на противоположной стороне клинка, то есть там где у фальшионов первого типа находится обух.'},
  {href: 'product1.html',image: 's10.jpg',name: 'Эрзац Фальшион',price: '5700', info: 'Эрзац-фальшион иногда называют крестьянской «рубилкой», что в переводе на английский означает «paisantchopper» или «qodenak». Применялся эрзац-фальшион для тренировочных боев.'},
  {href: 'product1.html',image: 's11.jpg',name: 'Турнирная Сабля',price: '9500', info: '- Турнирная сабля обладает всеми теми же качествами, как и спортивная (надежность, отсутствие остаточной деформации и и удобство использования), но отличается от спортивной в первую очередь наличием дола на клинке. Это делает клинок более гибким, а саму саблю легче и ее баланс удобнее.'},
  {href: 'product1.html',image: 's12.jpg',name: 'Федершверт',price: '10850', info: 'Набирающие популярность в наше время реплики тренировочных снарядов эпохи Возрождения, федершверты – это хороший компромисс между реалистичностью и безопасностью. Они исторически не затачиваются.'},
  {href: 'product1.html',image: 's13.jpg',name: 'Лабрис двуручный',price: '6900', info: 'Лабрис был широко распространён в культуре догреческой минойской цивилизации. При раскопках критских дворцов были обнаружены гигантские лабрисы, выше человеческого роста.'},
  {href: 'product1.html',image: 's14.png',name: 'Топор из Кинсемы',price: '3850', info: 'Нетипичный топор из Киснемы, Вологодская обл. XI в. В типологии А.Н.Кирпичникова как топор без типа.'},
  {href: 'product1.html',image: 's15.jpg',name: 'Топор хозяйственный',price: '4950', info: 'Хозяйственные топоры подобного типа были широко распространены на территории Руси и Скандинавии с IX по XVII век. "Бородатые" топоры особенно были распространены в средней и северной Руси от Рязанщины и Смоленщины до Ленинградской области.'},
  {href: 'product1.html',image: 's16.jpg',name: 'Топор. Европа',price: '4400', info: 'Длина 15 см. Ширина 12 см. Вес 0,5 кг. (без древка) Клинок: сталь 65Г. Закалка.'},
  {href: 'product1.html',image: 's17.jpg',name: 'Копье тип III',price: '3300', info: 'Боевое крылатое копье является разновидностью копья, используемого для охоты на кабана. Наконечник копья достаточно короткий, но при этом тяжелый. В его основании расположены два "крыла" (ушка), которые предназначены для предотвращения слишком глубокого проникновения копья в тело животного, дабы разъяренный зверь не смог атаковать охотника. '},
  {href: 'product1.html',image: 's18.jpg',name: 'Полэкс базовый',price: '9900', info: 'Название "Полэкс" произошло от английского слова POLEAXE , которое, как предполагают исследователи, в свою очередь, произошло от слова AXE , что в дословном переводе означает "Топор".'},
  {href: 'product1.html',image: 's19.jpg',name: 'Бердыш',price: '10850', info: 'Родное оружие, использовалось на Руси XVI - XVII вв.  Бердыш тяжёлое, крайне эффективное и многофункциональное оружие. Изначально бердыши использовались воинами Царя Ивана Грозного не потерпевшими не одного военного поражения за всю историю «стрелецкого войска».'},
  {href: 'product1.html',image: 's20.jpg',name: 'Арбалет',price: '17000', info: 'Изогнутый приклад улучшает внешний вид арбалета и дает возможность надежно зажимать приклад подмышкой для большей точности стрельбы. Отличный вариант для арбалетных тиров и турниров. Великолепно подходит для болтов со стальными наконечниками и для гуманизированных болтов'},
];

      function NotReadyAlert(event)
      {
        showModal('Sorry, not ready yet<br>Извините, еще не готово','Ладно');
        event.preventDefault();
        return false;
      }
      function showModal(messageText, buttonText){
        let modal = document.getElementsByClassName('modal')[0];
        modal.style.visibility = 'visible';
        modal.style.opacity ='1';

        let message = modal.getElementsByClassName('message')[0];
        message.innerHTML=messageText;
        // let button = modal.getElementsByTagName('button')[0];
        // button.innerHTML = buttonText;

        document.body.style.overflow = 'visible';
        let overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.visibility = 'visible';
        overlay.style.opacity ='1';
      }
      function ShowProductInfo(product){
        showModal(`
          <div class="modalIMG"><img src="${product.image}"></div>
          <div><a>${product.name}</a></div>
          <div><a>${product.price} &#8381;</a></div>
          <div><i>${product.info}</i></div>
        `,"Ладно");
      }
      function Search() {
        let cards = document.getElementsByClassName('card');
        let name = document.getElementById('Search').value;
        let nameRegExp = new RegExp(name, 'i');
        for(let i = 0; i<products.length; i++) {
        let product = products[i];
        if(nameRegExp.test(product.name)) {
        let card = cards[i];
        card.style.backgroundColor = 'blue';
        setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
        }, 2000);
      }}}

      function GenerateMenu()
      {
        //ссылка на кусок где генерировать
        let menu = document.querySelector('nav.main-menu ul');
        menu.innerHTML = `<li>
        <div class="searchbox">
          <input type="search" placeholder="Поиск по котам" id="Search"> 
          <button onclick="Search()">&#x1F50E;</button>
        </div>
        </li>`;

        //массив с штукоми
        let items = [
          {href: 'index.html',text: 'Товары'},
          {href: '',text: 'Контакты'},
          {href: '',text: 'Доставка'},
          {href: '',text: 'Акции'},
          {href: '',text: 'О нас'},
        ];

        //создание штук
        for(let i = 0; i<items.length; i++){
          //Создает кусок <a></a>
          let link = document.createElement('a');
          //Задает параметры <a></a>
          link.innerText = items[i].text;
          link.href = items[i].href;
          //Нет ссылки
          if(items[i].href == ''){
            link.addEventListener('click', NotReadyAlert);
          }
          //Создает ссылку <li></li>
          let menuItem = document.createElement('li');
          menuItem.appendChild(link);

          menu.appendChild(menuItem);
        }
        
      }
      function addToCart(productNum, productCount){
        productCount = parseInt(productCount);
        if (products[productNum].countInCart == undefined)
              products[productNum].countInCart = productCount;
        else
              products[productNum].countInCart += productCount;
        let cartProductCount = 0;
        for(let i = 0; i<products.length; i++){
          if(products[i].countInCart !== undefined)
            cartProductCount += products[i].countInCart;
        }

        let count = document.getElementById('productCount');
        count.innerText = cartProductCount;
        count.style.display = 'inline';
      }
      function GenerateProducts()
      {
        let catalog = document.querySelector('div.catalog');
        // catalog.innerHTML = '';

        for(let i = 0; i<products.length; i++){
          let product = products[i];
          let card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = '<a href="#">' + 
          '<div class="product-name">'+ products[i].name +'</div>' +
          '<div class="image"><img src="'+ products[i].image +'"></div>' +
          '<div class="price">'+products[i].price +' &#8381;</div>' +
          '</a>' + 
          '<div>' +
            // '<input type ="number" value = "1" min = "1">'+
            '<button>В корзину</button>'+
          '<div>';

          card.querySelector('button').addEventListener('click',function(e){
              let input = e.target.previousElementSibling;
              let count = input.value;
              addToCart(i, count);
              return false;
          });

          card.querySelector('a').addEventListener('click',function(){
            ShowProductInfo(products[i]);
          });

          catalog.appendChild(card);
        }
      }
      function Loaded() {
        let searchbox = document.getElementById('Search');
        searchbox.addEventListener("keydown", function (key){
          if(key.key =='Enter')
            Search();
        });

        GenerateMenu();
        GenerateProducts();
      }
      function hideModal(){
          let modal = document.getElementsByClassName('modal')[0];
          setTimeout(function(){
            modal.style.visibility = 'hidden';
          },350);
          modal.style.opacity ='0';

          document.body.style.overflow = 'auto';
          let overlay = document.getElementsByClassName('overlay')[0];
          setTimeout(function(){
            overlay.style.visibility = 'hidden';
          },200);
          modal.style.visibility = 'hidden';
          modal.style.opacity ='0';
      }
      
