declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_KEY: string;
      SECRET_KEY: string;
    }
  }
}

export {};
