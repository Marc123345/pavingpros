declare module 'react-modal-video' {
  import { Component } from 'react';

  export interface ModalVideoProps {
    channel?: 'youtube' | 'vimeo' | 'custom';
    isOpen?: boolean;
    videoId?: string;
    autoplay?: boolean;
    allowFullScreen?: boolean;
    animationSpeed?: number;
    classNames?: {
      modalVideo?: string;
      modalVideoClose?: string;
      modalVideoBody?: string;
      modalVideoInner?: string;
      modalVideoIframeWrap?: string;
      modalVideoCloseBtn?: string;
    };
    onClose?: () => void;
  }

  export default class ModalVideo extends Component<ModalVideoProps> {}
}

declare module 'react-modal-video/css/modal-video.css';

