const refs = {
  button1Faqs: document.querySelector('#button-1-faqs'),
  button2Faqs: document.querySelector('#button-2-faqs'),
  button3Faqs: document.querySelector('#button-3-faqs'),
  container1Faqs: document.querySelector('.text-container-faqs-1'),
  container2Faqs: document.querySelector('.text-container-faqs-2'),
  container3Faqs: document.querySelector('.text-container-faqs-3'),
};
const text1 = `<p class="text__container--text-faqs-1 visible-js" id="text-1-faqs">
            Звісно, для ми стимулюємо холдерів наших токенів через програми стейкінгу. На початку
            запуску монети буде доступно лише 30% від всього оброту, а інша частина буде майнитися і
            виходити на ринок протягом 10 років. Програми стейкінгу будуть з локом і без локу. Також
            тривалість локу буде варіюватися - чим довший лок, тим більша дохідність.
          </p>`;
const text2 = `<p class="text__container--text-faqs-2 visible-js" id="text-1-faqs">
            Можна буде міняти 3 монети: наша монета, BNB, BUSD/USDT. Для користувачів буде створений пул ліквідності, на якому можна застейкати токени та отримувати пасивний прибуток. 
          </p>`;
const text3 = `<p class="text__container--text-faqs-3 visible-js" id="text-1-faqs">
            10% від чистої виручки ми будемо передавати на благодійні цілі для  виконання важливих соціальних місій. Також ми будемо влаштовувати благодійні аукціони, на яких запрошуємо відомих митців, а виручені кошти направляти на благодійні акції. Це принесе додаткову цінність нашому маркет-плейсу. проведення звітності про благодійність для учасників
Ми хочемо приносити свій вклад у те, щоб зробити цей світ кращим!
          </p>`;
function targetButtonAddClickHandler() {
  return (refs.container1Faqs.innerHTML = text1);
}
function targetButtonAddClickHandler2() {
  return (refs.container2Faqs.innerHTML = text2);
}
function targetButtonAddClickHandler3() {
  return (refs.container3Faqs.innerHTML = text3);
}

refs.button1Faqs.addEventListener('click', targetButtonAddClickHandler);
refs.button2Faqs.addEventListener('click', targetButtonAddClickHandler2);
refs.button3Faqs.addEventListener('click', targetButtonAddClickHandler3);
refs.button1Faqs.addEventListener('blur', () => (refs.container1Faqs.innerHTML = ''));
refs.button2Faqs.addEventListener('blur', () => (refs.container2Faqs.innerHTML = ''));
refs.button3Faqs.addEventListener('blur', () => (refs.container3Faqs.innerHTML = ''));
