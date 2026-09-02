declare module 'isotope-layout' {
  export interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: 'masonry' | 'fitRows' | 'cellsByRow' | 'vertical' | 'packery' | 'masonryHorizontal' | 'fitColumns' | 'cellsByColumn' | 'horiz';
    percentPosition?: boolean;
    masonry?: {
      columnWidth?: number | string;
      gutter?: number | string;
    };
    animationOptions?: {
      duration?: number;
      easing?: string;
      queue?: boolean;
    };
    filter?: string;
    sortBy?: string;
    sortAscending?: boolean;
    stagger?: number;
    transitionDuration?: string;
    resizesContainer?: boolean;
    initLayout?: boolean;
  }

  export default class Isotope {
    constructor(element: HTMLElement, options?: IsotopeOptions);
    arrange(options?: { filter?: string; sortBy?: string; sortAscending?: boolean }): void;
    layout(): void;
    reloadItems(): void;
    addItems(elements: HTMLElement | HTMLElement[] | NodeList | HTMLCollection): void;
    remove(elements: HTMLElement | HTMLElement[] | NodeList | HTMLCollection): void;
    destroy(): void;
    getItemElements(): HTMLElement[];
    getFilteredItemElements(): HTMLElement[];
    updateSortData(element: HTMLElement | HTMLElement[]): void;
    shuffle(): void;
  }
}

