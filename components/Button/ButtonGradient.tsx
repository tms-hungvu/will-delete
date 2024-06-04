import { ReactNode } from "react";
import { Button, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

const ButtonGradient = ({ children, ...props }: { children: ReactNode }) => {
  const colors1 = ["#6253E1", "#04BEFE"];
  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
              colors1
            ).join(", ")})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
              colors1
            ).join(", ")})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button {...props} type="primary" size="large">
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default ButtonGradient;
