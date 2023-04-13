const app=document.querySelector('.app')
const razmet=`
<div class=blogmenu>
<h1>TRAVEL BLOG</h1>
<ul class="menu">
<li class="glavn"><a href="#">ГЛАВНАЯ</a>
<ul class='submenu'>
<li><a href="#">Германия</a></li>
<li><a href="#">Франция</a></li>
<li><a href="#">Италия</a></li>
<li><a href="#">Швейцария</a></li>
</ul>
<li><a href="#">О БЛОГЕ</a></li>
<li><a href="#">ЗАПИСИ В БЛОГЕ</a></li>
<li><a href="#">ПОСТ В ДЕТАЛЯХ</a></li>
<li><a href="#">МОИ КОНТАКТЫ</a></li>
</ul>
</div>`
app.innerHTML=razmet

const germany=document.querySelector('.germany');
// const gorod=document.createElement('h1')
// const img=document.createElement("img");
// img.classList.add("frankphoto")

const frank=[{img:'1.jpg', p: "Одно из этих высотных зданий - бывшая штаб-квартира Европейского Центробанка, который контролирует оборот евро. В 2015 штаб-квартира официально переехала в другой небоскрёб во Франкфурте, но на старом месте осталась знаменитая скульптура в форме знака евро со звёздами - символ банка." },
{img:'2.jpg', p: "В центре Франкфурта попадается много старых на вид зданий, но в очень хорошем состоянии"},
{img:'3.jpg', p: "Я на смортровой площадке высотного здания Франкфурта"},
{img:'4.jpg',p: "Франкфурт - не только родина сосисок. Ещё Гёте здесь родился. Ему в центре, между небоскрёбов, стоит памятник."},
{img:'5.jpg', p: "Я в футболке любимого клуба рядом с магазином атрибутики главных соперников"},
]
console.log(frank);
// germany.innerHTML=frank
let frankfurkt = frank.map((peoples)=>{
    console.log(peoples)
    return `
     <img src="${peoples.img}" class='frankphoto'>
     <p class="para">${peoples.p}</p>
    `
     });
     console.log(frankfurkt)
     germany.innerHTML +=frankfurkt
        
const keln=[{img:'6.jpg', p: "С точки зрения инфраструктуры город почти идеален. Я не знаю, что из себя представляют другие немецкие города, но в центра Кёльна нет никаких проблем с парковками. Везде есть многоэтажные паркинги, вдоль тротуаров - паркоматы." },
{img:'9.jpg', p: "Прогулка в китайском районе Кёльна"},
{img:'7.jpg', p: "Это самый центр города. Кёльнский собор и главный железнодорожный вокзал. Отсюда я уезжал в Мюнхен."},
{img:'13.jpg', p: "Наслаждаюсь прогулкой по многолюдным улицам Кёльна"},
{img:'8.jpg',p: "На ступенях у собора сидят люди, туристы и местные. Все кого-то или чего-то ждут."},

]
console.log(keln);
// germany.innerHTML=keln
    let gorodkeln = keln.map((peoples)=>{
      console.log(peoples)
      return `
      <img src="${peoples.img}" class='frankphoto'>
      <p class="para">${peoples.p}</p>
       `
       });
    console.log(gorodkeln)
    germany.innerHTML +=gorodkeln
                  
      
const darm=[{img:'10.jpg', p: "Дармштадтская колония художников на Матильденхёэ представляет собой центр модерна в Дармштадте. Он посвящен исследованию, представлению и посредничеству искусства и культуры примерно с 1900 года по настоящее время. " },
{img:'11.jpg', p: "Ботанический сад находится на своем нынешнем месте, на востоке города, с 1874 года. До этого сад несколько раз перемещался, так как быстро увеличивался в размерах."},
{img:'12.jpg',p: "Вы должны дважды взглянуть на эту достопримечательность: Waldspirale – впечатляющий шедевр художника Фриденсрайха Хундертвассера. Спиралевидное здание впечатляет своим чрезвычайно красочным дизайном и неправильными формами. Здесь нет ничего похожего на другие."},
{img:'14.jpg',p: "Наслаждаюсь прохладой у фонтана в парке Дармштадта."},
{img:'15.jpg',p: "На развалинах старого замка"}
]
console.log(darm);
// germany.innerHTML=darm
    let darmstadt = darm.map((peoples)=>{
        console.log(peoples)
        return `
        <img src="${peoples.img}" class='frankphoto'>
        <p class="para">${peoples.p}</p>
        `
        });
  console.log(darmstadt)
  germany.innerHTML +=darmstadt
                                   