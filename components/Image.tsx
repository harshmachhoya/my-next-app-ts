import getStrapiMedia from "../utils/media";
import Image from "next/image";
import PropTypes from "prop-types";
import { IMedia } from "../interfaces/common.interface";

const NextImage = (props: IMedia) => {
  const { width, height, url, alternativetext, layout } = props;
  const loader = ({ src }: { src: string }): string => {
    return getStrapiMedia(src);
  };

  // The image has a fixed width and height
  if (width && height) {
    return (
      <Image loader={loader} src={url} alt={alternativetext || ""} {...props} />
    );
  }

  // The image is responsive
  return (
    <Image
      loader={loader}
      layout={layout}
      width={width}
      height={height}
      objectFit="contain"
      src={url}
      alt={alternativetext || ""}
    />
  );
};

// Image.propTypes = {
//   media: mediaPropTypes.isRequired,
//   className: PropTypes.string,
// };

export default NextImage;
