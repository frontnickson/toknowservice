So, this is my best project. In this i going show, how i make project.
Which library i set in my project. I show step by step

My main idea is to take a lof of API and make service project when 
user can user each API in your goals.

I’ll make project on React/TypeScript

#Which library i use:

Redux/toolkit persist
axios
react-router-dom

#Which API i use:

OpenWeatherMap
IP Geolocation API
TheCatAPI / Dog API
JokeAPI / Anecdotica
PokeAPI / SWAPI 
NASA API

#Basic structure project

src/
├── assets/               # Статические файлы (изображения, шрифты и т.д.)
│   ├── images/
│   └── fonts/
│
├── components/           # Переиспользуемые UI-компоненты
│   ├── Button/
│   │   ├── Button.tsx    # Компонент
│   │   ├── Button.module.css # Стили (CSS Modules)
│   │   └── index.ts      # Экспорт компонента
│   └── ... 
│
├── pages/                # Страницы приложения
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.module.css
│   ├── About/
│   │   └── ...
│   └── ...
│
├── hooks/                # Кастомные хуки
│   ├── useFetch.ts
│   └── ...
│
├── utils/                # Вспомогательные функции
│   ├── api.ts            # API-клиент (axios/fetch)
│   └── helpers.ts
│
├── types/                # Глобальные типы TypeScript
│   ├── user.d.ts         # Интерфейсы для данных
│   └── ...
│
├── store/                # (Опционально) State-менеджмент (Redux/Zustand)
│   ├── slices/
│   └── store.ts
│
├── App.tsx               # Главный компонент приложения
├── main.tsx              # Точка входа (рендер React)
├── index.css             # Глобальные стили
└── vite-env.d.ts         # Типы для Vite (если используется) 