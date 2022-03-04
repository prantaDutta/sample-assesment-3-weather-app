/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_WEATHER_STACK_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}