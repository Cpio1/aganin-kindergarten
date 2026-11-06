# AGANIN KIDS — сайт детского сада

Next.js (App Router), TypeScript, Tailwind CSS, Motion, Lucide. База данных и CMS не нужны.

## Запуск

```bash
npm install
npm run dev        # разработка, http://localhost:3000
npm run typecheck  # проверка TypeScript
npm run lint
npm run build      # production-сборка
```

## Как добавить материалы

Положите файлы в `public/images/` и задеплойте сайт. Код менять не нужно.

| Файл | Где появится | Форматы |
|---|---|---|
| `logo.*` или имя с «logo» / «логотип» | шапка, первый экран, подвал, favicon, Open Graph | png, svg, webp, jpg |
| `main-page.*` | первый экран, Open Graph | png, jpg, webp, avif |
| `main-page2.*` | раздел «Біз туралы» | mp4, webm или изображение |
| любые другие изображения | галерея, порядок по имени: `image1`, `image2`, … `image10` | png, jpg, webp, avif |

Снимки HEIC с iPhone нужно сначала перевести в JPEG: `sips -s format jpeg IMG.HEIC --out image1.jpg`.

Пока файла нет, сайт показывает название текстом и иллюстрации. Выдуманные фото не используются.

### Логотип без прозрачности

```bash
npm run logo                     # находит файл с «logo» или «логотип» в имени
npm run logo -- путь/к/файлу.jpg # или конкретный файл
```

Скрипт создаёт `public/images/logo.png`: прозрачность оригинала сохраняется, а однотонный светлый фон вокруг логотипа удаляется. Результат стоит проверить глазами.

## Что настраивается в `src/lib/site-data.ts`

- `documentsUrl` — ссылка на документы. После заполнения появится кнопка «Құжаттарды қарау», сейчас вместо неё пояснение и WhatsApp.
- `groups` — названия групп на двух языках.
- `heroFocus`, `aboutFocus` — точка кадрирования фото, чтобы лица оставались в кадре.
- `twoGis` — карточка организации и координаты для карты.
- Телефоны, адрес, часы работы, Instagram.

Все тексты на двух языках находятся в `src/lib/translations.ts`.

## Как устроены две версии

- `src/components/website` — компьютеры (от 1024 px), `src/components/mobile-website` — смартфоны и планшеты, `src/components/shared` — общие части.
- `src/proxy.ts` отдаёт телефонам статическую страницу `/mobile-website` по адресу `/`.
- `SiteExperience` сверяет версию с реальной шириной экрана и при необходимости переключает её.

## Деплой на Vercel

1. Загрузите проект в Git-репозиторий и импортируйте его в Vercel.
2. После подключения домена `.edu.kz` задайте `NEXT_PUBLIC_SITE_URL=https://ваш-домен.edu.kz` и пересоберите проект. Этот адрес попадает в canonical, sitemap, robots и Open Graph. Без переменной используется production-адрес Vercel.

## Шрифты

Rubik и Onest проверены по таблице символов: все буквы Ә Ғ Қ Ң Ө Ұ Ү Һ І есть.
