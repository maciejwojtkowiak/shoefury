declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_KEY: string;
      SECRET_KEY: string;
    }
  }
}

interface Error {
  status?: number;
}

declare module 'http' {
  interface IncomingHttpHeaders {
    Authorization?: string;
  }
}

export {};
