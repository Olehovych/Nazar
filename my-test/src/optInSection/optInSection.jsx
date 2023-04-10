import "./optInSection.css";
export default function optInSection() {
  // /*
  // const form = document.getElementById('message-form');
  // const nameInput = document.getElementById('message-input');
  // const emailInput = document.querySelector('.OptSection1:last-child');
  // const surnameInput = document.querySelector('.OptSection2:first-child');
  // const phoneInput = document.querySelector('.OptSection2:last-child');
  // const messageInput = document.getElementById('inputTellUs');

  // const telegramBotToken = '6160009452:AAFOsemyNNyNWhCWHP_NXuuKeknkzllDQrI';
  // const telegramChatId = '-665752092';

  // function sendMessageToTelegramBot(name, email, surname, phone, message) {
  //   const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  //   const data = new FormData();
  //   data.append('chat_id', telegramChatId);
  //   data.append('text', `Ім'я: ${name}\nEmail: ${email}\nПрізвище: ${surname}\nНомер телефону: ${phone}\nКоротко про вас: ${message}`);

  //   const request = new XMLHttpRequest();
  //   request.open('POST', url);
  //   request.send(data);
  // }

  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   const name = nameInput.value;
  //   const email = emailInput.value;
  //   const surname = surnameInput.value;
  //   const phone = phoneInput.value;
  //   const message = messageInput.value;

  //   sendMessageToTelegramBot(name, email, surname, phone, message);

  //   form.reset();
  // });*/
  return (
    <div id="optInSection">
      <p id="optInText">Приєднюйтесь до нас</p>
      <p id="optInSubText">
        Побудуй <br />
        Свою кар'єру
      </p>
      <form class="telegram-form" id="message-form">
        <div id="inputsInOptSection">
          <div id="inputInOptSection1">
            <input
              type="text"
              placeholder="ім'я"
              class="OptSection1"
              id="message-input"
            />
            <input type="text" placeholder="Email" class="OptSection1" />
          </div>
          <div id="inputInOptSection2">
            <input type="text" placeholder="Прізвище" class="OptSection2" />
            <input
              type="text"
              placeholder="Номер телефону"
              class="OptSection2"
            />
          </div>
        </div>
        <textarea
          id="inputTellUs"
          cols="30"
          rows="10"
          placeholder="Коротко про вас..."
        ></textarea>
        <button class="mainInfoButton" type="submit">
          <p class="infoButtonText">Надіслати анкету</p>
        </button>
      </form>
    </div>
  );
}
