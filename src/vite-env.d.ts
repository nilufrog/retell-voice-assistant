/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RETELL_API_KEY: string
  readonly VITE_RETELL_AGENT_ID: string
  readonly VITE_RETELL_LLM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}