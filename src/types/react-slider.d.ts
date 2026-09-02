declare module 'react-slider' {
  import { Component, CSSProperties } from 'react';

  export interface SliderProps {
    className?: string;
    disabled?: boolean;
    invert?: boolean;
    markClassName?: string;
    marks?: boolean | number[] | { [key: number]: string | React.ReactNode };
    max?: number;
    min?: number;
    minDistance?: number;
    onAfterChange?: (value: number | number[]) => void;
    onChange?: (value: number | number[]) => void;
    onBeforeChange?: (value: number | number[]) => void;
    orientation?: 'horizontal' | 'vertical';
    pearling?: boolean;
    renderMark?: (props: { key: string; style?: CSSProperties }) => React.ReactNode;
    renderThumb?: (props: { key: string; style?: CSSProperties }) => React.ReactNode;
    renderTrack?: (props: { key: string; style?: CSSProperties }) => React.ReactNode;
    step?: number;
    thumbActiveClassName?: string;
    thumbClassName?: string;
    trackClassName?: string;
    value?: number | number[];
    defaultValue?: number | number[];
  }

  export default class Slider extends Component<SliderProps> {}
}

