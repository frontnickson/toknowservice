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
├── assets/
│   ├── images/
│   └── fonts/
│
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   └── ... 
│
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.module.css
│   ├── About/
│   │   └── ...
│   └── ...
│
├── hooks/
│   ├── useFetch.ts
│   └── ...
│
├── utils/
│   ├── api.ts
│   └── helpers.ts
│
├── types/
│   ├── user.d.ts
│   └── ...
│
├── store/
│   ├── slices/
│   └── store.ts
│
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts