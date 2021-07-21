import { useState } from "react";
import { Container } from "react-bootstrap";
import Page from "../Template/Page";

export default function Terms(props) {
    const [lang, setLang] = useState('en');

    return (
        <Page>
            <Container>
                <div className="lanuages d-flex">
                    <button
                        className="l-en ml-auto"
                        onClick={() => setLang("en")}
                    >
                        EN
                    </button>
                    <button
                        className="l-ru"
                        onClick={() => setLang("ru")}
                    >
                        RU
                    </button>
                </div>
                {lang === 'ru' ?
                    <section>

                        <h1>Добро пожаловать в Гарсон АЙО</h1>



                        <p>Эти условия и положения описывают правила и положения использования веб-сайта Garson AIO.</p>



                        <p>Заходя на этот веб-сайт, мы предполагаем, что вы принимаете эти условия и положения в полном объеме. Не продолжайте пользоваться веб-сайтом Garson AIO.</p>



                        <p>если вы не принимаете все условия и положения, изложенные на этой странице.</p>



                        <p>К настоящим Условиям и Положениям, Заявлению о конфиденциальности и Уведомлению об отказе</p>



                        <p>от ответственности, а также любым или всем Соглашениям применяется следующая терминология: «Клиент», «Вы» и «Ваш» относятся к вам, лицу, получающему доступ к этому веб-сайту</p>



                        <p>и принятие условий и положений Компании. «Компания», «Мы», «Мы», «Наши» и «Нас» относятся</p>



                        <p>к нашей Компании. «Сторона», «Стороны» или «Мы» относятся как к Клиенту, так и к нам самим, или либо к Клиенту</p>



                        <p>, либо к нам самим. Все условия относятся к предложению, принятию и рассмотрению платежа, необходимого для осуществления</p>



                        <p>процесса нашей помощи Клиенту наиболее подходящим способом, будь то официальные встречи</p>



                        <p>фиксированной продолжительности или любые другие средства, с явной целью удовлетворения потребностей Клиента в отношении</p>



                        <p>предоставления заявленных Компанией услуг/продуктов в соответствии с действующим законодательством и</p>



                        <p>в соответствии с ним . Любое использование вышеуказанной терминологии или других слов в единственном, множественном числе,</p>



                        <p>с заглавной буквы и/или он/она или они считаются взаимозаменяемыми и, следовательно, относятся к одному и тому же.</p>



                        <p>Настоящие условия предоставления услуг могут быть изменены, как и наши продукты, включая (без ограничений) цены, модель продажи и поддерживаемый контент.</p>



                        <p>Печенье</p>



                        <p>Мы используем файлы cookie. Используя веб-сайт Garson AIO, вы соглашаетесь на использование файлов cookie</p>



                        <p>в соответствии с политикой конфиденциальности Garson AIO.Большинство современных интерактивных веб-сайтов</p>



                        <p>используют файлы cookie, позволяющие нам получать сведения о пользователях при каждом посещении. Файлы cookie используются в некоторых областях нашего сайта</p>



                        <p>, чтобы обеспечить функциональность этой области и простоту использования для тех, кто ее посещает. Некоторые из наших</p>



                        <p>партнерских / рекламных партнеров также могут использовать файлы cookie. Мы также можем собирать аналитическую информацию об устройствах и браузерах</p>



                        <p>Лицензия</p>



                        <p>Если не указано иное, Garson AIO и/или ее лицензиары владеют правами интеллектуальной собственности на</p>



                        <p>все материалы по Гарсону АЙО. Все права на интеллектуальную собственность защищены. Вы можете просматривать и/или печатать</p>



                        <p>страницы с https://garsonaio.com для вашего личного использования с учетом ограничений, установленных настоящими правилами и условиями.</p>



                        <p>Вы не должны:</p>



                        <p>Переиздать материал из https://garsonaio.com</p>



                        <p>Продажа, аренда или сублицензия материалов от https://garsonaio.com</p>



                        <p>Воспроизводить, дублировать или копировать материалы с https://garsonaio.com</p>



                        <p>Распространяйте контент из Garson AIO (если контент специально не предназначен для распространения).</p>



                        <p>Гиперссылка на наш контент</p>



                        <p>Следующие организации могут ссылаться на наш веб-сайт без предварительного письменного разрешения:</p>



                        <p>Государственные учреждения;</p>



                        <p>Поисковые системы;</p>



                        <p>Новостные организации;</p>



                        <p>Дистрибьюторы онлайн-каталогов, когда они перечисляют нас в каталоге, могут ссылаться на наш веб-сайт таким же</p>



                        <p>образом, как они ссылаются на веб-сайты других перечисленных компаний; и</p>



                        <p>Общесистемные Аккредитованные Предприятия, за исключением некоммерческих организаций, благотворительных торговых центров</p>



                        <p>и благотворительных групп по сбору средств, которые не могут ссылаться на наш веб-сайт.</p>



                        <p>Эти организации могут ссылаться на нашу домашнюю страницу, публикации или другую информацию на веб-сайте до тех пор, пока</p>



                        <p>поскольку ссылка: (а) никоим образом не вводит в заблуждение; (б) не подразумевает ложного спонсорства, одобрения или</p>



                        <p>одобрения стороны, ссылающейся на ссылку, и ее продуктов или услуг; и (в) соответствует контексту</p>



                        <p>сайта стороны, ссылающейся на ссылку.</p>



                        <p>Мы можем рассматривать и утверждать по нашему собственному усмотрению другие запросы на ссылки от следующих типов организаций:</p>



                        <p>общеизвестные источники потребительской и/или деловой информации, такие как Торговые палаты, американские</p>



                        <p>Автомобильная ассоциация, AARP и Союз потребителей;</p>



                        <p>dot.com сайты сообществ;</p>



                        <p>ассоциации или другие группы, представляющие благотворительные организации, в том числе сайты благотворительных пожертвований,</p>



                        <p>онлайн каталог дистрибьюторов;</p>



                        <p>интернет-порталы;</p>



                        <p>бухгалтерские, юридические и консалтинговые фирмы, основными клиентами которых являются предприятия, а</p>



                        <p>также учебные заведения и торговые ассоциации.</p>



                        <p>Мы утвердим запросы на ссылки от этих организаций, если определим, что: (а) ссылка не отразится</p>



                        <p>неблагоприятно на нас или наших аккредитованных предприятиях (например, торговые ассоциации или другие организации</p>



                        <p>, представляющие по своей сути подозрительные виды бизнеса, такие как возможности работы на дому, не допускаются</p>



                        <p>перейти по ссылке); (B)организация не имеет неудовлетворительный показатель с нами; (с) благо нам</p>



                        <p>видимость связанные с гиперссылкой перевешивает отсутствие ; и (D), где</p>



                        <p>ссылка находится в контексте общей информации, ресурсов или по иным причинам в соответствии с редакционное содержание</p>



                        <p>в информационном бюллетене, или аналогичного продукта содействия миссии Организации.</p>



                        <p>Эти организации могут ссылаться на нашу домашнюю страницу, публикации или другую информацию веб-сайта, если</p>



                        <p>ссылка: (а) никоим образом не вводит в заблуждение; (б) ложно не подразумевает спонсорство, одобрение или одобрение</p>



                        <p>связывающей стороны и ит-продуктов или услуг; и (c) соответствует контексту</p>



                        <p>сайта связывающей стороны.</p>



                        <p>Если вы входите в число организаций, перечисленных в пункте 2 выше, и заинтересованы в ссылке на наш веб-сайт,</p>



                        <p>вы должны уведомить нас, отправив электронное письмо по адресу contactgarsonaio@gmail.com.</p>



                        <p>Пожалуйста, укажите свое имя, название вашей организации, контактную информацию (например, номер телефона и/или адрес электронной</p>



                        <p>почты), а также URL-адрес вашего сайта, список любых URL-адресов, с которых вы собираетесь перейти на наш веб-сайт,</p>



                        <p>и список URL-адресов на нашем сайте, на которые вы хотели бы перейти по ссылке. Дайте 2-3 недели на ответ.</p>



                        <p>Одобренные организации могут размещать гиперссылки на наш веб-сайт следующим образом:</p>



                        <p>Используя наше фирменное наименование; или</p>



                        <p>С помощью единого локатора ресурсов (веб-адреса), с которым связана ссылка; или</p>



                        <p>При использовании любого другого описания нашего веб-сайта или материалов, на которые ссылаются, это имеет смысл в</p>



                        <p>контексте и формате контента на сайте ссылающейся стороны.</p>



                        <p>Любое использование нашего имени, бренда или контента без предварительного разрешения запрещено и приведет к судебному разбирательству. Garson AIO является продуктом обновления, а не запасом, и к нему следует относиться как к таковому, любая попытка перепродажи или торговли программным обеспечением, которая может рассматриваться как вредная для программного обеспечения, приведет к постоянным запретам на наши услуги для всех вовлеченных лиц, а также может привести к судебным искам.</p>



                        <p>При отсутствии лицензионного соглашения на товарный знак не допускается использование логотипа Garson AIO или других произведений искусства для ссылок</p>



                        <p>.</p>



                        <p>Фреймы</p>



                        <p>Без предварительного одобрения и явного письменного разрешения вы не имеете права создавать рамки вокруг наших веб-страниц или</p>



                        <p>использовать другие методы, которые каким-либо образом изменяют визуальное представление или внешний вид нашего веб-сайта.</p>



                        <p>Резервирование прав</p>



                        <p>Мы оставляем за собой право в любое время и по своему собственному усмотрению потребовать, чтобы вы удалили все ссылки или любую конкретную</p>



                        <p>ссылку на наш веб-сайт. Вы соглашаетесь немедленно удалить все ссылки на наш веб-сайт по такому запросу. Мы также</p>



                        <p>оставляем за собой право в любое время вносить изменения в настоящие условия и положения, а также в политику привязки. Продолжая</p>



                        <p>чтобы перейти по ссылке на наш веб-сайт, вы соглашаетесь соблюдать и соблюдать настоящие условия и положения, касающиеся ссылок.</p>



                        <p>Удаление ссылок с нашего веб-сайта</p>



                        <p>Если вы найдете какую-либо ссылку на нашем веб-сайте или любой связанный веб-сайт неприемлемым по какой-либо причине, вы можете связаться</p>



                        <p>с нами по этому поводу. Мы рассмотрим запросы на удаление ссылок, но не будем обязаны делать это или отвечать</p>



                        <p>непосредственно вам.</p>



                        <p>Хотя мы стремимся обеспечить правильность информации на этом веб-сайте, мы не гарантируем ее полноту</p>



                        <p>или точность; мы также не обязуемся гарантировать, что веб-сайт остается доступным или что материалы на</p>



                        <p>веб-сайт поддерживается в актуальном состоянии.</p>



                        <p>Ответственность за Содержание</p>



                        <p>Мы не несем никакой ответственности за любой контент, появляющийся на вашем веб-сайте. Вы соглашаетесь возместить</p>



                        <p>убытки и защитить нас от всех претензий, вытекающих из вашего веб-сайта или основанных на нем. Никакие ссылки не могут появляться на любой</p>



                        <p>странице вашего веб-сайта или в любом контексте, содержащем контент или материалы, которые могут быть истолкованы как</p>



                        <p>клеветнические, непристойные или преступные, или которые нарушают, иным образом нарушают или пропагандируют нарушение или</p>



                        <p>иное нарушение прав третьих лиц.</p>



                        <p>Оговорка</p>



                        <p>В максимальной степени, разрешенной применимым законодательством, мы исключаем все заявления, гарантии и условия, касающиеся нашего веб-сайта и использования этого веб-сайта (включая, помимо прочего, любые гарантии, подразумеваемые законом в отношении удовлетворительного качества, пригодности для целей и/или использования разумной осторожности и мастерства). Ничто в этом отказе от ответственности не будет:</p>



                        <p>ограничьте или исключите нашу или вашу ответственность за смерть или телесные повреждения, возникшие в результате небрежности;</p>



                        <p>ограничьте или исключите нашу или вашу ответственность за мошенничество или мошенническое искажение информации;</p>



                        <p>ограничьте любые наши или ваши обязательства любым способом, который не разрешен применимым законодательством; или</p>



                        <p>исключите любые наши или ваши обязательства, которые не могут быть исключены в соответствии с применимым законодательством.</p>



                        <p>Ограничения и исключения из обязательств, изложенных в настоящем разделе и в другом месте данной дисклеймер: (с)</p>



                        <p>подлежат предыдущего пункта; и (B) регулируют все обязательства, вытекающие отказ или</p>



                        <p>применительно к предмету настоящего соглашения, в том числе обязательств, возникающих из договора, из деликта</p>



                        <p>(включая неосторожность), и за нарушение установленных законом обязанностей.</p>



                        <p>В той мере, в какой веб-сайт, информация и услуги на веб-сайте предоставляются бесплатно,</p>



                        <p>мы не несем ответственности за любые убытки или ущерб любого характера.</p>



                        <p>Garson AIO не несет ответственности за любые покупки или действия, связанные с использованием клиентом программного обеспечения. Приобретая и используя Garson AIO, вы принимаете на себя ответственность за любые покупки, которые вы совершаете с помощью программного обеспечения.</p>



                        <p>Если лицензионный ключ для одного из наших применимых продуктов не будет продлен в течение подходящего периода времени, ключ будет удален без возможности отзыва.</p>



                        <p>Любая попытка реинжиниринга или распространения нашего программного обеспечения (или любой другой формы интеллектуальной собственности) без разрешения приведет к немедленному прекращению действия вашего лицензионного ключа без возврата средств и может привести к судебному иску против вас.</p>



                        <p>Все продукты Garson AIO являются невозвратными цифровыми продуктами и не гарантируют вам успеха, однако значительно увеличивают ваши шансы на успех в ограниченных выпусках. Покупая Garson AIO, вы подтверждаете, что товар не подлежит возврату, и любые запросы на возврат средств будут рассматриваться как мошеннические и рассматриваться как таковые.</p>
                    </section>
                    :
                    <section>
                        <h1>Welcome to Garson AIO</h1>



                        <p>These terms and conditions outline the rules and regulations for the use of Garson AIO&#8217;s Website.</p>



                        <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Garson AIO&#8217;s website.</p>



                        <p>if you do not accept all of the terms and conditions stated on this page.</p>



                        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice</p>



                        <p>and any or all Agreements: &#171;Client&#187;, &#171;You&#187; and &#171;Your&#187; refers to you, the person accessing this website</p>



                        <p>and accepting the Company&#8217;s terms and conditions. &#171;The Company&#187;, &#171;Ourselves&#187;, &#171;We&#187;, &#171;Our&#187; and &#171;Us&#187;, refers</p>



                        <p>to our Company. &#171;Party&#187;, &#171;Parties&#187;, or &#171;Us&#187;, refers to both the Client and ourselves, or either the Client</p>



                        <p>or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake</p>



                        <p>the process of our assistance to the Client in the most appropriate manner, whether by formal meetings</p>



                        <p>of a fixed duration, or any other means, for the express purpose of meeting the Client&#8217;s needs in respect</p>



                        <p>of provision of the Company&#8217;s stated services/products, in accordance with and subject to, prevailing law</p>



                        <p>of . Any use of the above terminology or other words in the singular, plural,</p>



                        <p>capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>



                        <p>These terms of service are subject to change, as are our products, including (without restriction) pricing, sale model and supported content.</p>



                        <p>Cookies</p>



                        <p>We employ the use of cookies. By using Garson AIO&#8217;s website you consent to the use of cookies</p>



                        <p>in accordance with Garson AIO&#8217;s privacy policy.Most of the modern day interactive web sites</p>



                        <p>use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site</p>



                        <p>to enable the functionality of this area and ease of use for those people visiting. Some of our</p>



                        <p>affiliate / advertising partners may also use cookies. We may also collect analytical device and browser information</p>



                        <p>License</p>



                        <p>Unless otherwise stated, Garson AIO and/or it&#8217;s licensors own the intellectual property rights for</p>



                        <p>all material on Garson AIO. All intellectual property rights are reserved. You may view and/or print</p>



                        <p>pages from https://garsonaio.com for your own personal use subject to restrictions set in these terms and conditions.</p>



                        <p>You must not:</p>



                        <p>Republish material from https://garsonaio.com</p>



                        <p>Sell, rent or sub-license material from https://garsonaio.com</p>



                        <p>Reproduce, duplicate or copy material from https://garsonaio.com</p>



                        <p>Redistribute content from Garson AIO (unless content is specifically made for redistribution).</p>



                        <p>Hyperlinking to our Content</p>



                        <p>The following organizations may link to our Web site without prior written approval:</p>



                        <p>Government agencies;</p>



                        <p>Search engines;</p>



                        <p>News organizations;</p>



                        <p>Online directory distributors when they list us in the directory may link to our Web site in the same</p>



                        <p>manner as they hyperlink to the Web sites of other listed businesses; and</p>



                        <p>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,</p>



                        <p>and charity fundraising groups which may not hyperlink to our Web site.</p>



                        <p>These organizations may link to our home page, to publications or to other Web site information so long</p>



                        <p>as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or</p>



                        <p>approval of the linking party and its products or services; and (c) fits within the context of the linking</p>



                        <p>party&#8217;s site.</p>



                        <p>We may consider and approve in our sole discretion other link requests from the following types of organizations:</p>



                        <p>commonly-known consumer and/or business information sources such as Chambers of Commerce, American</p>



                        <p>Automobile Association, AARP and Consumers Union;</p>



                        <p>dot.com community sites;</p>



                        <p>associations or other groups representing charities, including charity giving sites,</p>



                        <p>online directory distributors;</p>



                        <p>internet portals;</p>



                        <p>accounting, law and consulting firms whose primary clients are businesses; and</p>



                        <p>educational institutions and trade associations.</p>



                        <p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect</p>



                        <p>unfavorably on us or our accredited businesses (for example, trade associations or other organizations</p>



                        <p>representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed</p>



                        <p>to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from</p>



                        <p>the visibility associated with the hyperlink outweighs the absence of ; and (d) where the</p>



                        <p>link is in the context of general resource information or is otherwise consistent with editorial content</p>



                        <p>in a newsletter or similar product furthering the mission of the organization.</p>



                        <p>These organizations may link to our home page, to publications or to other Web site information so long as</p>



                        <p>the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval</p>



                        <p>of the linking party and it products or services; and (c) fits within the context of the linking party&#8217;s</p>



                        <p>site.</p>



                        <p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website,</p>



                        <p>you must notify us by sending an e-mail to contactgarsonaio@gmail.com.</p>



                        <p>Please include your name, your organization name, contact information (such as a phone number and/or e-mail</p>



                        <p>address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site,</p>



                        <p>and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>



                        <p>Approved organizations may hyperlink to our Web site as follows:</p>



                        <p>By use of our corporate name; or</p>



                        <p>By use of the uniform resource locator (Web address) being linked to; or</p>



                        <p>By use of any other description of our Web site or material being linked to that makes sense within the</p>



                        <p>context and format of content on the linking party&#8217;s site.</p>



                        <p>Any use of our name, branding or content without prior permission is prohibited and will result in legal action. Garson AIO is a renewal product, not a stock and should be treated as such, any attempt to resell or trade the software that can be viewed as harmful to the software will result in permanent bans from our services for all those involved and may also result in legal action being taken.</p>



                        <p>No use of Garson AIO&#8217;s logo or other artwork will be allowed for linking absent a trademark license</p>



                        <p>agreement.</p>



                        <p>Iframes</p>



                        <p>Without prior approval and express written permission, you may not create frames around our Web pages or</p>



                        <p>use other techniques that alter in any way the visual presentation or appearance of our Web site.</p>



                        <p>Reservation of Rights</p>



                        <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular</p>



                        <p>link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also</p>



                        <p>reserve the right to amend these terms and conditions and its linking policy at any time. By continuing</p>



                        <p>to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>



                        <p>Removal of links from our website</p>



                        <p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact</p>



                        <p>us about this. We will consider requests to remove links but will have no obligation to do so or to respond</p>



                        <p>directly to you.</p>



                        <p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness</p>



                        <p>or accuracy; nor do we commit to ensuring that the website remains available or that the material on the</p>



                        <p>website is kept up to date.</p>



                        <p>Content Liability</p>



                        <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify</p>



                        <p>and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any</p>



                        <p>page on your Web site or within any context containing content or materials that may be interpreted as</p>



                        <p>libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or</p>



                        <p>other violation of, any third party rights.</p>



                        <p>Disclaimer</p>



                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>



                        <p>limit or exclude our or your liability for death or personal injury resulting from negligence;</p>



                        <p>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</p>



                        <p>limit any of our or your liabilities in any way that is not permitted under applicable law; or</p>



                        <p>exclude any of our or your liabilities that may not be excluded under applicable law.</p>



                        <p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a)</p>



                        <p>are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or</p>



                        <p>in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort</p>



                        <p>(including negligence) and for breach of statutory duty.</p>



                        <p>To the extent that the website and the information and services on the website are provided free of charge,</p>



                        <p>we will not be liable for any loss or damage of any nature.</p>



                        <p>Garson AIO is not liable for any purchases or actions due to customer usage of the software. By purchasing and using Garson AIO you accept responsibility for any purchases that you make via the software.</p>



                        <p>If a license key for one of our applicable products is not renewed within a suitable time period the key will be removed without possibility of revocation.</p>



                        <p>Any attempt to reverse engineer or distribute our software (or any other form of intellectual property) without permission will result in immediate termination of your license key without refund and may result in legal action being taken against you.</p>



                        <p>All Garson AIO products are non-refundable digital products and do not guarantee you success, however drastically increase your chances of being successful limited releases. By purchasing Garson AIO, you acknowledge that the product is non-refundable, and any chargeback requests will be viewed as fraudulent and treated as such.</p>


                    </section>
                }
            </Container></Page>
    )
}