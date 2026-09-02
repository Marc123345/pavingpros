import Image, { type ImageProps } from "next/image";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

export type AppImageProps = ImageProps;

export default function AppImage({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  alt = "",
  ...rest
}: AppImageProps) {
  return <Image width={width} height={height} alt={alt} {...rest} />;
}
