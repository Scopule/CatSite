let products = [
  {href: 'product1.html',image: 'кот.jpg',name: 'Это просто кот',price: '120', info: 'Тупой'},
  {href: 'product2.html',image: 'кот2.jpeg',name: 'Это не просто кот',price: '4000', info: 'Умный'},
  {href: 'product3.html',image: 'кот3.jpg',name: 'Это злой кот',price: '200', info: 'Любит есть'},
  {href: 'product4.html',image: 'кот4.jpg',name: 'Это страшный кот',price: '125', info: 'Воняет'},
  {href: 'product5.html',image: 'кот5.jpeg',name: 'Это страшный кот 2',price: '700', info: 'Наркоман'},
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
        let button = modal.getElementsByTagName('button')[0];
        button.innerHTML = buttonText;

        document.body.style.overflow = 'visible';
        let overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.visibility = 'visible';
        overlay.style.opacity ='1';
      }
      function ShowProductInfo(product){
        showModal(`
          <div><img src="${product.image}"></div>
          <div>${product.name}</div>
          <div>${product.price} &#8381;</div>
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
        card.style.border = '1px dashed red';
        card.style.backgroundColor = 'yellow';
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
          '<div class="image"><img src="'+ products[i].image +'"></div>' +
          '<div class="product-name">'+ products[i].name +'</div>' +
          '<div class="price">Цена: '+products[i].price +' &#8381;</div>' +
          '</a>' + 
          '<div>' +
            '<input type ="number" value = "1" min = "1">'+
            '<button>Купить</button>'+
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
      
