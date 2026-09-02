declare module 'wowjs/dist/wow.js' {
  interface WOWOptions {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    callback?: (box: HTMLElement) => void;
    scrollContainer?: string | HTMLElement | null;
  }

  class WOW {
    constructor(options?: WOWOptions);
    init(): void;
    sync(): void;
  }

  const WOWConstructor: typeof WOW;
  export = WOWConstructor;
}

declare module 'wowjs/dist/wow' {
  export * from 'wowjs/dist/wow.js';
}

declare module 'wowjs' {
  export * from 'wowjs/dist/wow.js';
}

// Extend Window interface to include WOW for global access
declare global {
  interface Window {
    WOW?: {
      new (options?: import('wowjs/dist/wow.js').WOWOptions): import('wowjs/dist/wow.js').WOW;
    };
  }
}

export {};