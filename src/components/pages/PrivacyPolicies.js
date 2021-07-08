import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Page from "../Template/Page";

export default function PrivacyPolicies(props) {
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

                        <h1>Политика конфиденциальности</h1>



                        <p>Гарсон АЙО («мы», «мы» или «наш») управляет https://garsonaio.com/ (далее именуемый «Услуга»). Эта страница информирует вас о нашей политике в отношении сбора, использования и раскрытия персональных данных, когда вы используете наш Сервис, и о вариантах, которые вы связываете с этими данными. Мы используем ваши данные для предоставления и улучшения Сервиса. Используя Сервис, вы соглашаетесь на сбор и использование информации в соответствии с настоящей политикой. Если иное не определено в настоящей Политике конфиденциальности, термины, используемые в настоящей Политике конфиденциальности, имеют те же значения, что и в наших Правилах и условиях, доступных с https://www.prismaio.com/</p>



                        <p>Определения</p>



                        <p>Сервис — Сервис — это <a href="https://garsonaio.com">https://garsonaio.com</a>&nbsp; управляется Гарсоном АЙО</p>



                        <p>Персональные данные — Персональные данные означают данные о живом человеке, которого можно идентифицировать по этим данным (или по той и другой информации, которая либо находится в нашем распоряжении, либо может попасть в наше распоряжение).</p>



                        <p>Данные об использовании — Данные об использовании-это данные, собранные автоматически либо в результате использования Сервиса, либо из самой инфраструктуры Сервиса (например, продолжительность посещения страницы).</p>



                        <p>Файлы cookie — Файлы cookie-это небольшие файлы, хранящиеся на вашем устройстве (компьютере или мобильном устройстве).</p>



                        <p>Контролер данных — Контролер данных означает физическое или юридическое лицо, которое (самостоятельно, совместно или совместно с другими лицами) определяет цели, для которых и каким образом обрабатывается или должна обрабатываться любая личная информация. В целях настоящей Политики конфиденциальности мы являемся Контролером ваших Персональных данных.</p>



                        <p>Обработчики данных (или Поставщики Услуг) — Обработчик данных (или Поставщик Услуг) означает любое физическое или юридическое лицо, которое обрабатывает данные от имени Контроллера Данных. Мы можем использовать услуги различных Поставщиков услуг для более эффективной обработки ваших данных.</p>



                        <p>Субъект данных (или Пользователь) — Субъектом данных является любое живое физическое лицо, которое использует наш Сервис и является субъектом Персональных данных.</p>



                        <p>Сбор и использование информации</p>



                        <p>Мы собираем несколько различных типов информации для различных целей, чтобы предоставлять и улучшать наши услуги для вас.</p>



                        <p>личные данные</p>



                        <p>При использовании нашего Сервиса мы можем попросить вас предоставить нам определенную личную информацию, которая может быть использована для связи или идентификации вас («Персональные данные»). Информация, позволяющая установить личность, может включать, но не ограничивается:</p>



                        <p>● Адрес электронной почты</p>



                        <p>● Файлы cookie и данные об использовании</p>



                        <p>Мы можем использовать ваши Персональные данные для связи с вами с помощью информационных бюллетеней, маркетинговых или рекламных материалов и другой информации, которая может вас заинтересовать. Вы можете отказаться от получения любого или всех этих сообщений от нас, связавшись с нами.</p>



                        <p>Данные об Использовании</p>



                        <p>Мы также можем собирать информацию о том, как осуществляется доступ к Сервису и как он используется («Данные об использовании»). Эти данные об использовании могут включать такую информацию, как адрес Интернет-протокола вашего компьютера (например, IP-адрес), тип браузера, версия браузера, страницы нашего Сервиса, которые вы посещаете, время и дата вашего посещения, время, проведенное на этих страницах, уникальные идентификаторы устройств и другие диагностические данные.</p>



                        <p>Отслеживание и Данные файлов Cookie</p>



                        <p>Мы используем файлы cookie и аналогичные технологии отслеживания для отслеживания активности на нашем Сервисе, и мы храним определенную информацию.</p>



                        <p>Файлы cookie-это файлы с небольшим объемом данных, которые могут содержать анонимный уникальный идентификатор. Файлы cookie отправляются в ваш браузер с веб-сайта и сохраняются на вашем устройстве. Также используются другие технологии отслеживания, такие как маяки, теги и скрипты, для сбора и отслеживания информации, а также для улучшения и анализа нашего Сервиса.</p>



                        <p>Вы можете дать указание своему браузеру отказаться от всех файлов cookie или указать, когда отправляется файл cookie. Однако, если вы не принимаете файлы cookie, вы, возможно, не сможете использовать некоторые части нашего Сервиса.</p>



                        <p>Примеры файлов cookie, которые мы используем:</p>



                        <p>● Файлы cookie Сеанса. Мы используем сеансовые файлы cookie для работы нашего Сервиса.</p>



                        <p>● Файлы cookie Предпочтений. Мы используем файлы cookie предпочтений для запоминания ваших предпочтений и различных настроек.</p>



                        <p>● Файлы cookie Безопасности. Мы используем файлы cookie безопасности в целях безопасности.</p>



                        <p>Использование данных</p>



                        <p>Garson AIO использует собранные данные для различных целей:</p>



                        <p>● Предоставлять и поддерживать наш Сервис</p>



                        <p>● Уведомлять вас об изменениях в нашем Сервисе</p>



                        <p>● Разрешить вам участвовать в интерактивных функциях нашего Сервиса, когда вы решите это сделать</p>



                        <p>● Для обеспечения поддержки клиентов</p>



                        <p>● Для сбора анализа или ценной информации, чтобы мы могли улучшить наш сервис</p>



                        <p>● Для мониторинга использования нашего Сервиса</p>



                        <p>● Для выявления, предотвращения и решения технических проблем</p>



                        <p>● Предоставлять вам новости, специальные предложения и общую информацию о других предлагаемых нами товарах, услугах и мероприятиях, аналогичных тем, которые вы уже приобрели или о которых вы спрашивали, если вы не решили не получать такую информацию</p>



                        <p>Правовая основа обработки Персональных данных в соответствии с Общим Положением о защите данных (GDPR)</p>



                        <p>Если вы из Европейской экономической зоны (ЕЭЗ), правовая основа Garson AIO для сбора и использования личной информации, описанной в настоящей Политике конфиденциальности, зависит от Персональных данных, которые мы собираем, и конкретного контекста, в котором мы их собираем.</p>



                        <p>Garson AIO может обрабатывать ваши Персональные данные, потому что:</p>



                        <p>● Нам необходимо заключить с вами контракт</p>



                        <p>● Вы дали нам на это разрешение</p>



                        <p>● Обработка осуществляется в наших законных интересах и не противоречит вашим правам</p>



                        <p>● Для целей обработки платежей</p>



                        <p>● Соблюдать закон</p>



                        <p>Хранение данных</p>



                        <p>Garson AIO будет хранить ваши Персональные данные только до тех пор, пока это необходимо для целей, изложенных в настоящей Политике конфиденциальности. Мы будем хранить и использовать ваши Персональные данные в объеме, необходимом для выполнения наших юридических обязательств (например, если мы обязаны хранить ваши данные в соответствии с применимым законодательством), разрешать споры и обеспечивать соблюдение наших юридических соглашений и политик.</p>



                        <p>Garson AIO также сохранит данные об использовании для целей внутреннего анализа. Данные об использовании, как правило, сохраняются в течение более короткого периода времени, за исключением случаев, когда эти данные используются для укрепления безопасности или улучшения функциональности нашего Сервиса, или мы по закону обязаны хранить эти данные в течение более длительных периодов.</p>



                        <p>Передача данных</p>



                        <p>Ваша информация, включая Персональные данные, может передаваться и храниться на компьютерах, расположенных за пределами вашего штата, провинции, страны или другой правительственной юрисдикции, где законы о защите данных могут отличаться от законов вашей юрисдикции.</p>



                        <p>Если вы находитесь за пределами Соединенных Штатов и решили предоставить нам информацию, пожалуйста, обратите внимание, что мы передаем данные, включая Персональные данные, в Соединенные Штаты и обрабатываем их там.</p>



                        <p>Ваше согласие с настоящей Политикой конфиденциальности, за которым следует предоставление такой информации, означает ваше согласие на такую передачу.</p>



                        <p>Garson AIO предпримет все разумно необходимые шаги для обеспечения того, чтобы ваши данные обрабатывались безопасно и в соответствии с настоящей Политикой конфиденциальности, и никакая передача ваших Персональных данных организации или стране не будет осуществляться, если не будут приняты надлежащие меры контроля, включая безопасность ваших данных и другой личной информации.</p>



                        <p>Раскрытие данных</p>



                        <p>Правовые требования</p>



                        <p>Garson AIO может раскрыть ваши Персональные данные, добросовестно полагая, что такие действия необходимы для:</p>



                        <p>● Соблюдать юридические обязательства</p>



                        <p>● Для защиты и защиты прав или собственности Garson AIO</p>



                        <p>● Для предотвращения или расследования возможных правонарушений в связи с Сервисом</p>



                        <p>● Для защиты личной безопасности пользователей Сервиса или общественности</p>



                        <p>● Для защиты от юридической ответственности</p>



                        <p>Безопасность данных</p>



                        <p>Безопасность ваших данных важна для нас, но помните, что ни один способ передачи через Интернет или способ электронного хранения не является на 100% безопасным. Хотя мы стремимся использовать коммерчески приемлемые средства для защиты ваших Персональных данных, мы не можем гарантировать их абсолютную безопасность.</p>



                        <p>Наша политика в отношении сигналов «Не отслеживать» в соответствии с Законом Калифорнии о защите в Интернете (CalOPPA)</p>



                        <p>Мы не поддерживаем Не Отслеживать («DNT»). Не отслеживать-это параметр, который вы можете задать в своем веб-браузере, чтобы сообщить веб-сайтам, что вы не хотите, чтобы вас отслеживали. Вы можете включить или отключить «Не отслеживать», посетив страницу настроек или настроек вашего веб-браузера.</p>



                        <p>Ваши права на защиту данных в соответствии с Общим Положением о защите данных (GDPR)</p>



                        <p>Если вы являетесь резидентом Европейской экономической зоны (ЕЭЗ), у вас есть определенные права на защиту данных. Garson AIO стремится предпринять разумные шаги, чтобы позволить вам исправлять, изменять, удалять или ограничивать использование ваших Персональных данных. Если вы хотите получить информацию о том, какие персональные данные мы храним о вас, и если вы хотите, чтобы они были удалены из наших систем, пожалуйста, свяжитесь с нами.</p>



                        <p>При определенных обстоятельствах у вас есть следующие права на защиту данных:</p>



                        <p>● Право на доступ, обновление или удаление имеющейся у нас информации о вас. Когда это возможно, вы можете получить доступ, обновить или запросить удаление ваших Персональных данных непосредственно в разделе настроек вашей учетной записи. Если вы не можете выполнить эти действия самостоятельно, пожалуйста, свяжитесь с нами, чтобы помочь вам.</p>



                        <p>● Право на исправление. Вы имеете право на исправление вашей информации, если эта информация является неточной или неполной.</p>



                        <p>● Право на возражение. Вы имеете право возражать против нашей обработки ваших персональных данных.</p>



                        <p>● Право на ограничение. Вы имеете право потребовать, чтобы мы ограничили обработку вашей личной информации.</p>



                        <p>● Право на переносимость данных. Вы имеете право на получение копии имеющейся у нас информации о вас в структурированном, машиночитаемом и широко используемом формате.</p>



                        <p>● Право отозвать согласие. Вы также имеете право отозвать свое согласие в любое время, когда Garson AIO полагался на ваше согласие на обработку вашей личной информации.</p>



                        <p>Пожалуйста, обратите внимание, что мы можем попросить вас подтвердить вашу личность, прежде чем отвечать на такие запросы. Вы имеете право подать жалобу в Орган по защите данных на наш сбор и использование ваших Персональных данных. Для получения дополнительной информации, пожалуйста, свяжитесь с вашим местным органом по защите данных в Европейской экономической зоне (ЕЭЗ).</p>



                        <p>Поставщики услуг</p>



                        <p>Мы можем нанимать сторонние компании и частных лиц для облегчения предоставления наших Услуг («Поставщики услуг»), предоставления Услуг от нашего имени, выполнения услуг, связанных с Обслуживанием, или оказания нам помощи в анализе использования наших Услуг. Эти третьи стороны имеют доступ к вашим Персональным данным только для выполнения этих задач от нашего имени и обязаны не разглашать и не использовать их в каких-либо других целях.</p>



                        <p>Аналитика</p>



                        <p>Мы можем использовать сторонних Поставщиков услуг для мониторинга и анализа использования наших Услуг.</p>



                        <p>● Google Analytics</p>



                        <p>Google Analytics-это сервис веб-аналитики, предлагаемый Google, который отслеживает и сообщает о трафике веб-сайтов. Google использует собранные данные для отслеживания и мониторинга использования нашего Сервиса. Эти данные передаются другим сервисам Google. Google может использовать собранные данные для контекстуализации и персонализации рекламы в своей собственной рекламной сети.</p>



                        <p>Вы можете отказаться от предоставления своей активности в Сервисе Google Analytics, установив надстройку браузера для отказа от Google Analytics. Надстройка предотвращает использование JavaScript Google Analytics (ga.js, analytics.js и dc.js) от обмена информацией с Google Analytics об активности посещений.</p>



                        <p>Для получения дополнительной информации о политике конфиденциальности Google, пожалуйста, посетите веб-страницу «Конфиденциальность и условия Google»: https://policies.google.com/privacy?hl=en</p>



                        <p>Платежи</p>



                        <p>Мы можем предоставлять платные продукты и/или услуги в рамках Сервиса. В этом случае мы используем сторонние сервисы для обработки платежей (например, платежные системы).</p>



                        <p>Мы не будем хранить или собирать данные вашей платежной карты. Эта информация предоставляется непосредственно нашим сторонним платежным системам, использование вашей личной информации которыми регулируется их Политикой конфиденциальности. Эти платежные системы придерживаются стандартов, установленных PCI-DSS, управляемых Советом по стандартам безопасности PCI, который является совместным усилием таких брендов, как Visa, MasterCard, American Express и Discover. Требования PCI-DSS помогают обеспечить безопасную обработку платежной информации.</p>



                        <p>Платежными системами, с которыми мы работаем, являются:</p>



                        <p>● Облачные платежи — Их Политику конфиденциальности можно просмотреть по адресу https://static.cloudpayments.ru/docs/Offer.pdf</p>



                        <p>Ссылки на другие сайты</p>



                        <p>Наш Сервис может содержать ссылки на другие сайты, которые не управляются нами. Если вы перейдете по ссылке третьей стороны, вы будете перенаправлены на сайт этой третьей стороны. Мы настоятельно рекомендуем вам ознакомиться с Политикой конфиденциальности каждого сайта, который вы посещаете. Мы не контролируем и не несем никакой ответственности за содержание, политику конфиденциальности или действия любых сторонних сайтов или сервисов.</p>



                        <p>Неприкосновенность частной жизни детей</p>



                        <p>Наш Сервис не предназначен для лиц младше 18 лет («Дети»). Мы сознательно не собираем личную информацию от лиц младше 18 лет. Если вы являетесь родителем или опекуном и вам известно, что ваш ребенок предоставил нам Персональные данные, пожалуйста, свяжитесь с нами. Если нам станет известно, что мы собирали Персональные данные детей без подтверждения согласия родителей, мы предпримем шаги по удалению этой информации с наших серверов.</p>



                        <p>Изменения в настоящей Политике конфиденциальности</p>



                        <p>Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, опубликовав новую Политику конфиденциальности на этой странице. Мы сообщим вам об этом по электронной почте и/или в заметном уведомлении о нашем Сервисе до вступления изменений в силу и обновим «последнее обновление» в верхней части этой Политики конфиденциальности. Вам рекомендуется периодически просматривать эту Политику конфиденциальности на предмет любых изменений. Изменения в настоящей Политике конфиденциальности вступают в силу с момента их публикации на этой странице.</p>



                        <p>связаться с нами</p>



                        <p>Если у вас есть какие-либо вопросы по поводу этой Политики конфиденциальности, пожалуйста, свяжитесь с нами через нашу службу поддержки contactgarsonaio@gmail.com.</p>
                    </section>
                    :
                    <section>
                        <h1>Privacy Policies</h1>
                        <p>Garson AIO (&#171;us&#187;, &#171;we&#187;, or &#171;our&#187;) operates the<a href="https://www.prismaio.com/"> https://garsonaio.com/</a>website (hereinafter referred to as the &#171;Service&#187;). This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from<a href="https://www.prismaio.com/"> https://www.prismaio.com/</a></p>



                        <h2><strong>Definitions</strong></h2>



                        <p><strong>Service &#8212;</strong> Service is the<a href="https://www.prismaio.com/"> https://garsonaio.com/</a>website operated by Garson AIO</p>



                        <p><strong>Personal Data &#8212;</strong> Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>



                        <p><strong>Usage Data &#8212;</strong> Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>



                        <p><strong>Cookies &#8212;</strong> Cookies are small files stored on your device (computer or mobile device).</p>



                        <p><strong>Data Controller &#8212;</strong> Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>



                        <p><strong>Data Processors (or Service Providers) &#8212;</strong> Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>



                        <p><strong>Data Subject (or User) &#8212;</strong> Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>



                        <h2><strong>Information Collection and Use</strong></h2>



                        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>



                        <p><strong>Personal Data</strong></p>



                        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&#171;Personal Data&#187;). Personally identifiable information may include, but is not limited to:</p>



                        <ul><li>Email address</li><li>Cookies and Usage Data</li></ul>



                        <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by contacting us.</p>



                        <p><strong>Usage Data</strong></p>



                        <p>We may also collect information on how the Service is accessed and used (&#171;Usage Data&#187;). This Usage Data may include information such as your computer&#8217;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>



                        <p><strong>Tracking &amp; Cookies Data</strong></p>



                        <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>



                        <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.</p>



                        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>



                        <p>Examples of Cookies we use:</p>



                        <ul><li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li><li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li><li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li></ul>



                        <h2><strong>Use of Data</strong></h2>



                        <p>Garson AIO uses the collected data for various purposes:</p>



                        <ul><li>To provide and maintain our Service</li><li>To notify you about changes to our Service</li><li>To allow you to participate in interactive features of our Service when you choose to do so</li><li>To provide customer support</li><li>To gather analysis or valuable information so that we can improve our Service</li><li>To monitor the usage of our Service</li><li>To detect, prevent and address technical issues</li><li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li></ul>



                        <h2><strong>Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)</strong></h2>



                        <p>If you are from the European Economic Area (EEA), Garson AIO legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.</p>



                        <p>Garson AIO may process your Personal Data because:</p>



                        <ul><li>We need to perform a contract with you</li><li>You have given us permission to do so</li><li>The processing is in our legitimate interests and it is not overridden by your rights</li><li>For payment processing purposes</li><li>To comply with the law</li></ul>



                        <h2><strong>Retention of Data</strong></h2>



                        <p>Garson AIO will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>



                        <p>Garson AIO will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>



                        <h2><strong>Transfer of Data</strong></h2>



                        <p>Your information, including Personal Data, may be transferred to &#8212; and maintained on &#8212; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>



                        <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>



                        <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>



                        <p>Garson AIO will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>



                        <h2><strong>Disclosure of Data</strong></h2>



                        <p><strong>Legal Requirements</strong></p>



                        <p>Garson AIO may disclose your Personal Data in the good faith belief that such action is necessary to:</p>



                        <ul><li>To comply with a legal obligation</li><li>To protect and defend the rights or property of Garson AIO</li><li>To prevent or investigate possible wrongdoing in connection with the Service</li><li>To protect the personal safety of users of the Service or the public</li><li>To protect against legal liability</li></ul>



                        <h2><strong>Security of Data</strong></h2>



                        <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>



                        <h2><strong>Our Policy on &#171;Do Not Track&#187; Signals under the California Online Protection Act (CalOPPA)</strong></h2>



                        <p>We do not support Do Not Track (&#171;DNT&#187;). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked. You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>



                        <h2><strong>Your Data Protection Rights under the General Data Protection Regulation (GDPR)</strong></h2>



                        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Garson AIO aims to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>



                        <p>In certain circumstances, you have the following data protection rights:</p>



                        <ul><li><strong>The right to access, update or delete the information we have on you.</strong> Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.</li><li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li><li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li><li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li><li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li><li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Garson AIO relied on your consent to process your personal information.</li></ul>



                        <p>Please note that we may ask you to verify your identity before responding to such requests. You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>



                        <h2><strong>Service Providers</strong></h2>



                        <p>We may employ third party companies and individuals to facilitate our Service (&#171;Service Providers&#187;), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>



                        <h3><strong>Analytics</strong></h3>



                        <p>We may use third-party Service Providers to monitor and analyse the use of our Service.</p>



                        <ul><li><strong>Google Analytics</strong><strong></strong><strong></strong> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></li></ul>



                        <h3><strong>Payments</strong></h3>



                        <p>We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>



                        <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>



                        <p>The payment processors we work with are:</p>



                        <ul><li><strong>Cloudpayments &#8212;</strong> Their Privacy Policy can be viewed at https://static.cloudpayments.ru/docs/Offer.pdf</li></ul>



                        <h2><strong>Links to Other Sites</strong></h2>



                        <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&#8217;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>



                        <h2><strong>Children&#8217;s Privacy</strong></h2>



                        <p>Our Service does not address anyone under the age of 18 (&#171;Children&#187;). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>



                        <h2><strong>Changes to This Privacy Policy</strong></h2>



                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &#171;last updated&#187; at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>



                        <h2><strong>Contact Us</strong></h2>



                        <p>If you have any questions about this Privacy Policy, please contact us via our support<a href="https://help.prismaio.com"> </a>contactgarsonaio@gmail.com.</p>
                    </section>
                }
            </Container>
        </Page>
    )
}