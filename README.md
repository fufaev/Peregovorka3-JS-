# Переговорка3 (JS)

В первом задании вы подготовили бэкенд, во втором — вёрстку. 
Цель третьего задания — реализовать одностраничное приложение «Яндекс Переговорки», 
которое будет использовать все наработки из предыдущих заданий. 
Приложение должно обладать всей функциональностью, изображённой на макете из второго задания.

Необходимо реализовать следующие переходы между макетами:

- При клике по свободному «слоту» в списке переговорок происходит переход на форму создания встречи с заполненным временем проведения и названием переговорки; если пользователь меняет время, выбранная переговорка заменяется на блок рекомендаций — о нём ниже.
- При клике по кнопке «Создать встречу» также происходит переход на форму создания встречи, но без заполненных полей (блок рекомендаций отсутствует и появляется только после ввода времени проведения встречи).

Для блока рекомендаций необходимо реализовать функцию getRecommendation (описание интерфейса ), которая будет подбирать подходящие переговорки для встречи, учитывая:

- количество участников и вместимость переговорок;
- близость переговорки ко всем участникам встречи (первыми в списке должны быть переговорки, для которых суммарное количество пройдённых всеми участниками этажей будет минимальным).
Если все подходящие переговорки заняты, необходимо проверить, возможно ли освободить какую-то из них: а) Может быть, можно перенести встречу из неё в другую переговорку (например, меньших размеров). б) Если переговорки заняты не на весь период времени, стоит попробовать освободить одну из них, перенеся встречи в другие подходящие переговорки. Например, есть встреча с 11:00 до 12:00 и есть две подходящие переговорки А (занята с 11:00 до 11:30) и B (занята c 11:30 до 12:00). В таком случае можно перенести получасовую встречу из A в B, чтобы освободить А, или перенести встречу из B в A, чтобы освободить B. Вариант выбираем так, чтобы суммарное количество пройдённых всеми участниками этажей было минимальным.

Если не удалось найти никаких вариантов, необходимо выбрать подходящие переговорки, которые освободятся раньше других.

Всевозможные сценарии обработки некорректных данных, введённых пользователем, и системных ошибок, не описанных во втором задании, мы предлагаем продумать самостоятельно и спроектировать в качестве необязательного задания.

Мы не ограничиваем вас в выборе технологий, фреймворков и библиотек. Пожалуйста, для каждого выбранного инструмента напишите небольшое обоснование — зачем он нужен в вашем проекте и почему именно он.

Мы будем оценивать реализацию функциональности, а также:

- оформление кода;
- архитектуру приложения;
- организованную вами инфраструктуру для разработки;
- наличие и качество тестов;
- performance.