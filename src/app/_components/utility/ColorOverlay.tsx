type ColorOverlayProps = {
  bgColor: string;
};

const ColorOverlay = ({ bgColor }: ColorOverlayProps) => {
  return <div className={`color-overlay absolute inset-0 ${bgColor}`}></div>;
};

export default ColorOverlay;
