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
                    <div >

                        <h1>ПУБЛИЧНАЯ ОФЕРТА</h1>



                        <p>Настоящая публичная оферта (далее — Оферта) представляет собой предложение ИП «Копылов А.Е.», ОГРН: 321774600232930, ИНН 771003857215, юридический адрес125047, Россия, г. Москва, ул. 3-я Тверская-Ямская д 15, кв 14 (далее – Продавец), обращенное к неопределённому кругу дееспособных физических лиц заключить договор розничной купли-продажи программы для ЭВМ под товарными знаками обслуживания «GarsonAIO» (далее — Договор) на ниже изложенных условиях:</p>



                        <p><strong>1.</strong><strong> </strong><strong>ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</strong></p>



                        <p>1.1. Публичная оферта (далее – «Оферта») — публичное предложение Продавца, адресованное неопределенному кругу лиц, заключить с Продавцом договор купли-продажи товара дистанционным способом (далее — «Договор») на условиях, содержащихся в настоящей Оферте, включая все Приложения.</p>



                        <p>1.2. Заказ Товара на сайте Интернет-магазина –позиции указанные Покупателем из ассортимента Товара, предложенного к продаже, при оформлении заявки на приобретение Товара на сайте Интернет-магазина или через Оператора.</p>



                        <p>1.3 «Личный кабинет» — персональный и не доступный третьим лицам раздел Сайта, доступ к которому</p>



                        <p>осуществляется путем ввода Аутентификационных данных (логина и пароля) Покупателя. В Личном кабинете Покупателя, на его лицевом счёте, отражаются сведения о заказах Покупателя, их плате и исполнении, данные о наличии долгосрочной подписки на товары и др.</p>



                        <p>1.4 «Покупатель» – дееспособное физическое лицо, прошедшее процедуру регистрации на Сайте и оформившее Заказ.</p>



                        <p>1.5 «Акцепт» – полное и безоговорочное принятие условий договора розничной купли- продажи, изложенных в Оферте относительно приобретения Товара, осуществляемое путем прохождения процедуры</p>



                        <p>регистрации на Сайте в качестве Покупателя и оформления заявки на приобретение Товара.1.6 «Персональные данные» – любая информация, относящаяся к определённому или определяемому на основании такой информации физическому лицу (субъекту персональных данных), в том числе его</p>



                        <p>фамилия, имя, отчество, год, месяц, день и место рождения, адрес, реквизиты банковской карты, семейное, социальное, имущественное положение, образование, профессия, другая информация.1.7 «Держатель карты» – физическое лицо, дающее распоряжение Банку-эмитенту на перевод денежных средств с банковской карты от имени Покупателя в пользу Продавца.</p>



                        <p>1.8 . «Банк-эмитент» — кредитная организация, осуществляющая выпуск банковских карт, а также расчеты по операциям, совершаемым с использованием банковских карт.</p>



                        <p>1.9 «Процессинговый центр» – обеспечивает обработку данных банковской карты Держателя карты и</p>



                        <p>передачу сведений в Банк-эмитент для осуществления платежа (ООО «КЛАУДПЭЙМЕНТС» ИНН:</p>



                        <p>7708806062, КПП: 770801001, ОГРН: 1147746077159, Юридический адрес: 115162, ГОРОД МОСКВА,</p>



                        <p>УЛИЦА ШУХОВА, ДОМ 14, СТРОЕНИЕ 11, ЭТАЖ 3 ПОМ 77).</p>



                        <p><strong>2.</strong><strong> </strong><strong>ОБЩИЕ ПОЛОЖЕНИЯ</strong></p>



                        <p>2.1. Заказ Покупателем Товара, размещенного на сайте Интернет-магазина означает, что Покупатель согласен со всеми условиями настоящей Оферты.</p>



                        <p>2.2. Администрация сайта Интернет-магазина имеет право вносить изменения в Оферту без уведомления Покупателя.</p>



                        <p>2.3. Срок действия Оферты не ограничен, если иное не указано на сайте Интернет-магазина.</p>



                        <p>2.4. Продавец предоставляет Покупателю полную и достоверную информацию о Товаре, включая информацию об основных потребительских свойствах Товара, месте изготовления, а также информацию о гарантийном сроке и сроке годности Товара на сайте Интернет магазина, в разделе https://garsonaio.com/.</p>



                        <p><strong>3.</strong><strong> </strong><strong>ЦЕНА ТОВАРА&nbsp;</strong></p>



                        <p>3.1. Цена на каждую позицию Товара указана на сайте Интернет-магазина.&nbsp;</p>



                        <p>3.2. Продавец имеет право в одностороннем порядке изменить цену на любую позицию Товара.&nbsp;</p>



                        <p>3.3. В случае изменения цены на заказанный Товар Продавец обязуется в течение количество дней проинформировать Покупателя об изменении цены Товара.</p>



                        <p>3.4. Покупатель вправе подтвердить либо аннулировать Заказ на приобретение Товара, если цена изменена Продавцом после оформления Заказа.</p>



                        <p>3.5. Изменение Продавцом цены на оплаченный Покупателем Товар не допускается.&nbsp;</p>



                        <p>3.6. Обязательства Покупателя по оплате Товара считаются исполненными с момента поступления Продавцом денежных средств.</p>



                        <p>3.8. Расчеты между Продавцом и Покупателем за Товар производятся способами, указанными на сайте Интернет-магазина в http://garsonaio.com/</p>



                        <p><strong></strong><strong>4. ОФОРМЛЕНИЕ ЗАКАЗА</strong><strong></strong></p>



                        <p>4.1. Заказ Товара осуществляется Покупателем через сервис сайта Интернет-магазина <a href="http://garsonaio.com/">http://garsonaio.com/</a>.</p>



                        <p>4.2. При регистрации на сайте Интернет-магазина Покупатель обязуется предоставить следующую регистрационную информацию:</p>



                        <p>4.2.1 Email или аккаунт Discord;</p>



                        <p>4.3. Наименование, количество, цена выбранного Покупателем Товара указываются в корзине Покупателя на сайте Интернет-магазина.&nbsp;</p>



                        <p>4.4. Если Продавцу необходима дополнительная информация, он вправе запросить ее у Покупателя. В случае не предоставления необходимой информации Покупателем, Продавец не несет ответственности за выбранный Покупателем Товар.</p>



                        <p>4.5. Принятие Покупателем условий настоящей Оферты осуществляется посредством внесения Покупателем соответствующих данных в регистрационную форму на сайте Интернет-магазина.&nbsp;</p>



                        <p>4.7. Продавец не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении Заказа.</p>



                        <p>4.8. Покупатель несет ответственность за достоверность предоставленной информации при оформлении Заказа.</p>



                        <p>4.9. Договор купли-продажи дистанционным способом между Продавцом и Покупателем считается заключенным с момента выдачи Продавцом Покупателю кассового или товарного чека либо иного документа, подтверждающего оплату Товара.</p>



                        <p>4.10 Пользователь не может вернуть товар и получить заплаченные им средства обратно после активации своего лицензионного ключа.</p>



                        <p><strong>5. Оплата Заказа</strong></p>



                        <p>Покупатель оплачивает товары в соответствии с ценами, опубликованными на Сайте. Цена (стоимость) Товаров действительна на дату формирования Заказа и может быть изменена Продавцом в любое время. Цена (стоимость) Товаров не может быть изменена Продавцом в одностороннем порядке после заказа Товара.</p>



                        <p>5.1. Оплата за Товар осуществляется в размере 100% стоимости заказанного Товара.</p>



                        <p>5.2. Способы оплаты Товара (части цены (стоимости) Товара):</p>



                        <p>5.2.1. Разовая оплата заказа путем использования банковской карты и иных электронных средств платежа: QIWI, Yandex.Деньги, VK Pay и т.п.&nbsp;</p>



                        <p>5.3. Абонентская оплата банковской картой на неограниченный срок путём размещения в Личном кабинете Покупателя соответствующего заявления о присоединении к программе «Автоплатеж», которая предусматривает</p>



                        <p>автоматическое списание с банковской карты Покупателя денежных средств за Заказ. Списание денежных средств осуществляется в течении 24 часов в день покупки лицензии.</p>



                        <p>5.4. Покупатель вправе в любой момент отказаться от подключения к программе «Автоплатеж на неограниченный срок», сделав об этом соответствующее распоряжение в Личном кабинете.</p>



                        <p>5.5. Покупка проходит после нажатия пользователем кнопки “Purchase”, после чего Клиент перенаправляется на платежную страницу, на</p>



                        <p>которой отображаются параметры платежа, а также предлагается ввести реквизиты банковской карты Клиента.</p>



                        <p>5.5.1. Перечень реквизитов банковской карты для проведения платежей включает в себя:</p>



                        <p>— номер банковской карты;</p>



                        <p>— срок окончания действия банковской карты (месяц/год);</p>



                        <p>— код проверки подлинности банковской карты CVC2/CVV2;</p>



                        <p>— Фамилию и Имя держателя банковской карты.</p>



                        <p>5.5.2. Продавец не хранит и не обрабатывает данные банковских карт Покупателя, обеспечивая лишь запросы в Процессинговый центр и Банк-эмитент для проведения операций по банковской карте Покупателя. Платежная система запоминает данные банковской карты Покупателя и передаёт Продавцу токен – уникальный идентификатор банковской карты, ввиду чего доступ Продавца или третьих лиц непосредственно к данным</p>



                        <p>банковской карты отсутствует.</p>



                        <p>5.5.3. Процессинговый центр защищает и обрабатывает данные банковских карт по стандарту безопасности</p>



                        <p>PCI DSS.</p>



                        <p>5.5.4. Покупатель гарантирует, что он является держателем банковской карты, осознанно, корректно и полностью вводит все требуемые реквизиты банковской карты при осуществлении оплаты Товара на Сайте.</p>



                        <p><strong>6.</strong><strong> </strong><strong>ПЕРЕДАЧА ТОВАРА ПОКУПАТЕЛЮ</strong></p>



                        <p>6.1 Продавец оказывает Покупателю услуги за счет предоставления лицензии к Программе для ЭВМ, посредством выдачи лицензионного ключа в личном кабинете пользователя на сайте <a href="http://garsonaio.com/">http://garsonaio.com/</a>.&nbsp;</p>



                        <p><strong>7. РЕКВИЗИТЫ ПРОДАВЦА</strong></p>



                        <p><strong>Продавец:&nbsp;</strong></p>



                        <p><strong>&nbsp;</strong>ИП КОПЫЛОВ АЛЕКСАНДР ЕВГЕНЬЕВИЧ</p>



                        <p><strong>89853686539</strong></p>



                        <p><strong>Адрес: 125047, Россия, г. Москва, ул. 3-я Тверская-Ямская д 15, кв 14</strong></p>



                        <p><strong>&nbsp;Банковские реквизиты</strong></p>



                        <p><strong>ИНН/КПП: 771003857215</strong></p>



                        <p><strong>ОГРН: 321774600232930</strong></p>



                        <p><strong>р/с: 40802810200002006708</strong></p>



                        <p><strong>В АО «ТИНЬКОФФ БАНК:</strong></p>



                        <p><strong>к/с: 30101810145250000974</strong></p>



                        <p><strong>БИК: 044525974</strong></p>



                        <p>Внимательно ознакомьтесь с текстом публичной оферты, и если Вы не согласны с каким-либо пунктом оферты, Вы вправе отказаться от покупки Товаров, предоставляемых Продавцом, и не совершать действий, указанный в п. 2.1. настоящей Оферты.</p>
                    </div>
                    :
                    <>
                        <h1>PUBLIC OFFER</h1>



                        <p>This public offer (hereinafter referred to as the Offer) is an offer of IP «Kopylov A. E.», OGRN: 321774600232930, TIN 771003857215, legal address 125047, Moscow, 3-ya Tverskaya-Yamskaya d 15, kv 14 (hereinafter referred to as the Seller), addressed to an indefinite circle of capable individuals to conclude a contract for the retail sale of computer programs under the service trademarks «GarsonAIO «(hereinafter referred to as the Contract) on the following terms:</p>



                        <p>1. DEFINITION OF TERMS</p>



                        <p>1.1. Public Offer (hereinafter referred to as the «Offer») is a public offer of the Seller, addressed to an indefinite circle of persons, to conclude a contract for the purchase and sale of goods by remote means with the Seller (hereinafter referred to as the «Contract») on the terms contained in this Offer, including all Appendices.</p>



                        <p>1.2. Ordering Goods on the website of the Online store –items specified by the Buyer from the assortment of Goods offered for sale when making an application for the purchase of Goods on the website of the Online store or through the Operator.</p>



                        <p>1.3 «Personal account» is a personal section of the Website that is not accessible to third parties, access to which</p>



                        <p>it is carried out by entering the Authentication data (login and password) of the Buyer. In the Buyer’s Personal Account, on his personal account, information about the Buyer’s orders, their payment and execution, data on the availability of a long-term subscription to goods, etc. is reflected.</p>



                        <p>1.4 «Buyer» – a capable individual who has passed the registration procedure on the Website and placed an Order.</p>



                        <p>1.5 «Acceptance» – full and unconditional acceptance of the terms of the retail sale agreement set out in the Offer for the purchase of Goods, carried out by passing the procedure</p>



                        <p>registration on the Website as a Buyer and registration of an application for the purchase of Goods.1.6 «Personal data» – any information related to a certain or determined on the basis of such information to an individual (the subject of personal data), including his</p>



                        <p>last name, first name, patronymic, year, month, day and place of birth, address, bank card details, family, social, property status, education, profession, other information.1.7 «Card holder» – an individual who gives an order to the Issuing Bank to transfer funds from a bank card on behalf of the Buyer in favor of the Seller.</p>



                        <p>1.8. «Issuing Bank» — a credit institution that issues bank cards, as well as settlements on transactions made using bank cards.</p>



                        <p>1.9 «Processing center – — provides processing of the Cardholder’s bank card data and</p>



                        <p>transfer of information to the issuing Bank for making a payment (LLC «CLOUDPAYMENTS» TIN:</p>



                        <p>7708806062, CHECKPOINT: 770801001, OGRN: 1147746077159, Legal address: 115162, MOSCOW,</p>



                        <p>14 SHUKHOV STREET, BUILDING 11, FLOOR 3, ROOM 77).</p>



                        <p>2. GENERAL PROVISIONS</p>



                        <p>2.1. The Buyer’s order of the Goods placed on the website of the Online store means that the Buyer agrees to all the terms of this Offer.</p>



                        <p>2.2. The administration of the website of the Online store has the right to make changes to the Offer without notifying the Buyer.</p>



                        <p>2.3. The validity period of the Offer is not limited, unless otherwise specified on the website of the Online store.</p>



                        <p>2.4. The Seller provides the Buyer with complete and reliable information about the Product, including information about the main consumer properties of the Product, the place of manufacture, as well as information about the warranty period and expiration date of the Product on the website of the Online store, in the section https://garsonaio.com/.</p>



                        <p>3. PRODUCT PRICE&nbsp;</p>



                        <p>3.1. The price for each item of the Product is indicated on the website of the online store.&nbsp;</p>



                        <p>3.2. The Seller has the right to unilaterally change the price for any item of the Goods.&nbsp;</p>



                        <p>3.3. In the event of a change in the price of the ordered Goods, the Seller undertakes to inform the Buyer about the change in the price of the Goods within the number of days.</p>



                        <p>3.4. The Buyer has the right to confirm or cancel the Order for the purchase of Goods if the price is changed by the Seller after placing the Order.</p>



                        <p>3.5. The Seller may not change the price of the Goods paid for by the Buyer.&nbsp;</p>



                        <p>3.6. The Buyer’s obligations to pay for the Goods are considered fulfilled from the moment the Seller receives the funds.</p>



                        <p>3.8. Payments between the Seller and the Buyer for the Goods are made by the methods specified on the website of the Online store in http://garsonaio.com/</p>



                        <p>4. MAKING AN ORDER</p>



                        <p>4.1. The order of the Goods is carried out by the Buyer through the service of the website of the Online store http://garsonaio.com/.</p>



                        <p>4.2. When registering on the website of the Online store, the Buyer undertakes to provide the following registration information:</p>



                        <p>4.2.1 Email or Discord account;</p>



                        <p>4.3. The name, quantity, and price of the Product selected by the Buyer are indicated in the Buyer’s basket on the website of the Online store.&nbsp;</p>



                        <p>4.4. If the Seller needs additional information, he has the right to request it from the Buyer. If the Buyer does not provide the necessary information, the Seller is not responsible for the Product chosen by the Buyer.</p>



                        <p>4.5. The Buyer accepts the terms of this Offer by entering the relevant data into the registration form on the website of the Online store by the Buyer.&nbsp;</p>



                        <p>4.7. The Seller is not responsible for the content and accuracy of the information provided by the Buyer when placing an Order.</p>



                        <p>4.8. The Buyer is responsible for the accuracy of the information provided when placing an Order.</p>



                        <p>4.9. The contract of purchase and sale by remote means between the Seller and the Buyer is considered concluded from the moment the Seller issues the Buyer a cash or commodity receipt or other document confirming the payment of the Goods.</p>



                        <p>4.10 The user cannot return the product and receive the funds paid by him back after activating his license key.</p>



                        <p>5. Payment of the Order</p>



                        <p>The buyer pays for the goods in accordance with the prices published on the Website. Price (cost) The price of the Goods is valid as of the date of the Order formation and can be changed by the Seller at any time. Price (cost) The Goods cannot be changed by the Seller unilaterally after ordering the Goods.</p>



                        <p>5.1. Payment for the Goods is made in the amount of 100% of the cost of the ordered Goods.</p>



                        <p>5.2. Payment methods for the Goods (part of the price (cost)&nbsp;</p>



                        <p>5.2.1. One-time payment of the order by using a bank card and other electronic means of payment: QIWI, Yandex.Money, VK Pay, etc.&nbsp;</p>



                        <p>5.3. Subscription payment by bank card for an unlimited period by placing in the Buyer’s Personal Account a corresponding application for joining the «Autopayment» program, which provides</p>



                        <p>for automatic debiting of funds from the Buyer’s bank card for the Order. Funds are debited within 24 hours on the day of purchase of the license.</p>



                        <p>5.4. The Buyer has the right to refuse to connect to the «Autopayment for an unlimited period» program at any time by making an appropriate order about it in the Personal Account.</p>



                        <p>5.5. The purchase takes place after the user clicks the “Purchase” button, after which the Client is redirected to the payment page,</p>



                        <p>which displays the payment parameters, and also offers to enter the details of the Client’s bank card.</p>



                        <p>5.5.1. The list of bank card details for making payments includes:</p>



                        <p>— bank card number;</p>



                        <p>— expiration date of the bank card (month/year);</p>



                        <p>— bank card authentication code CVC2/CVV2;</p>



                        <p>— The name and surname of the bank card holder.</p>



                        <p>5.5.2. The Seller does not store or process the data of the Buyer’s bank cards, providing only requests to the Processing Center and the Issuing Bank for conducting operations on the Buyer’s bank card. The payment system remembers the data of the Buyer’s bank card and transmits to the Seller a token-a unique identifier of the bank card, which means that there is no access of the Seller or third parties directly to the</p>



                        <p>bank card data.</p>



                        <p>5.5.3. The Processing center protects and processes the bank card data according to the security standard</p>



                        <p>PCI DSS.</p>



                        <p>5.5.4. The Buyer guarantees that he is the holder of a bank card, consciously, correctly and completely enters all the required bank card details when paying for the Goods on the Website.</p>



                        <p>6. TRANSFER OF THE GOODS TO THE BUYER</p>



                        <p>6.1 The Seller provides services to the Buyer by providing a license to the Computer Program, by issuing a license key in the user’s personal account on the website http://garsonaio.com/.&nbsp;</p>



                        <p>7. DETAILS OF THE SELLER</p>



                        <p>Seller:</p>



                        <p>IP KOPYLOV ALEXANDER EVGENYEVICH</p>



                        <p>89853686539</p>



                        <p>Address: 125047, Russia, Moscow, 3-ya Tverskaya-Yamskaya d 15, kv 14</p>



                        <p>&nbsp;Bank details</p>



                        <p>TIN / KPP: 771003857215</p>



                        <p>OGRN: 321774600232930</p>



                        <p>r / s: 40802810200002006708</p>



                        <p>IN JSC » TINKOFF BANK:</p>



                        <p>c / s: 30101810145250000974</p>



                        <p>BIC: 044525974</p>



                        <p>Carefully read the text of the public offer, and if you do not agree with any clause of the offer, you have the right to refuse to purchase Goods provided by the Seller and not to perform the actions specified in clause 2.1. of this Offer.</p>
                    </>
                }
            </Container>
        </Page>
    )
}