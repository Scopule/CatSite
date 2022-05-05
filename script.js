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
      function Search() {
        let name = document.getElementById('Search').value;
        let productNumber = null;
        if (name == 'Это просто кот') {
          productNumber = 0;
        } else if (name == 'Это не просто кот'){
          productNumber = 1;
        } else if (name == 'Это злой кот'){
          productNumber = 2;
        } else if (name == 'Это страшный кот'){
          productNumber = 3;
        } else if (name == 'Это страшный кот 2'){
          productNumber = 4;
        } else {
          alert('Товар не найден');
        }
        let cards = document.getElementsByClassName('card');
        let card = cards[productNumber];
        card.style.border = '1px dashed red';
        card.style.backgroundColor = 'Pink';

        setTimeout(function () {
          card.style.border = 'none';
          card.style.backgroundColor = '';
        }, 2000);
      }
      function GenerateMenu()
      {
        let menu = document.querySelector('nav.main-menu ul');
        menu.innerHTML = '';

        let items = [
          {href: 'index.html',text: 'Товары'},
          {href: '',text: 'Контакты'},
          {href: '',text: 'Доставка'},
          {href: '',text: 'Акции'},
        ];

        for(let i = 0; i<items.length; i++){
          let link = document.createElement('a');
          link.innerText = items[i].text;
          link.href = items[i].href;

          if(items[i].href == ''){
            link.addEventListener('click', NotReadyAlert);
          }

          let menuItem = document.createElement('li');
          menuItem.appendChild(link);

          menu.appendChild(menuItem);
        }
      }
      function Loaded() {
        let searchbox = document.getElementById('Search');
        searchbox.addEventListener("keydown", function (key){
          if(key.key =='Enter')
            Search();
        });

        GenerateMenu();
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
      
