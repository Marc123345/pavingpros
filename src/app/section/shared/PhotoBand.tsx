import AppImage from "../../components/elements/AppImage";
import React from "react";

interface PhotoBandProps {
  src: string;
  alt: string;
  /** Optional line laid over the image. */
  caption?: string;
  /** Crop height. "tall" for a feature band, "short" for a divider. */
  height?: "tall" | "short";
}

/**
 * Full-width photographic divider. Used to break up long stretches of dark
 * panels with the actual work.
 */
const PhotoBand: React.FC<PhotoBandProps> = ({
  src,
  alt,
  caption,
  height = "tall",
}) => (
  <section className={`photo-band photo-band--${height}`}>
    <AppImage src={src} alt={alt} width={1600} height={1000} />
    {caption && (
      <div className="auto-container">
        <p className="photo-band-caption">{caption}</p>
      </div>
    )}
  </section>
);

export default PhotoBand;
