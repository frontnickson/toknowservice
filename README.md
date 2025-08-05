# API Hub - Multi-Service Project

This project demonstrates how to integrate multiple public APIs into a single React/TypeScript application. Users can access various API services for different purposes.

## 🛠️ Technologies & Libraries Used

- **Framework**: React with TypeScript
- **State Management**: Redux Toolkit + Redux Persist
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## 🌐 Integrated APIs

- **Weather**: [OpenWeatherMap](https://openweathermap.org/api)
- **Geolocation**: [IP Geolocation API](https://ipgeolocation.io/)
- **Animals**: 
  - [TheCatAPI](https://thecatapi.com/) 
  - [Dog API](https://dog.ceo/dog-api/)
- **Entertainment**:
  - [JokeAPI](https://sv443.net/jokeapi/v2/)
  - [Anecdotica](https://anecdotica.ru/api)
- **Games & Media**:
  - [PokeAPI](https://pokeapi.co/)
  - [SWAPI (Star Wars)](https://swapi.dev/)
- **Space**: [NASA API](https://api.nasa.gov/)

## 🏗️ Project Structure

src/
├── assets/ # Static files
│ ├── images/ # All project images
│ └── fonts/ # Custom fonts
│
├── components/ # Reusable UI components
│ ├── Button/ # Example component
│ │ ├── Button.tsx # Component logic
│ │ ├── Button.module.css # Component styles
│ │ └── index.ts # Component export
│ └── ... # Other components
│
├── pages/ # Application views
│ ├── Home/ # Main page
│ │ ├── Home.tsx # Page component
│ │ └── Home.module.css # Page styles
│ ├── About/ # About page
│ │ └── ... # Other pages
│ └── ...
│
├── hooks/ # Custom React hooks
│ ├── useFetch.ts # Data fetching hook
│ └── ... # Other hooks
│
├── utils/ # Utility functions
│ ├── api.ts # API client config
│ └── helpers.ts # Helper functions
│
├── types/ # TypeScript types
│ ├── user.d.ts # User type definitions
│ └── ... # Other type definitions
│
├── store/ # Redux store
│ ├── slices/ # Redux slices
│ └── store.ts # Store configuration
│
├── App.tsx # Root component
├── main.tsx # Application entry point
├── index.css # Global styles
└── vite-env.d.ts # Vite type declarations