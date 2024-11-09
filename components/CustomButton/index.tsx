import {
  StyleProp,
  Text,
  TouchableOpacity,
  TVParallaxProperties,
  ViewStyle,
} from "react-native";
import React, { Fragment } from "react";

interface CustomButtonProps {
  title: string;
  handlePress: any;
  containerStyles: string;
  isLoading?: boolean;
  activeOpacity?: number;
  titleStyles?: string;
  hasTVPreferredFocus?: boolean;
  tvParallaxProperties?: TVParallaxProperties;
  disableTouchSound?: boolean;
  renderAdditionComponent?: React.Component | any;
  touchableOpacityStyles?: StyleProp<ViewStyle>;
  disableTouchableOpacity?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
  activeOpacity,
  titleStyles,
  hasTVPreferredFocus,
  tvParallaxProperties,
  disableTouchSound,
  renderAdditionComponent,
  touchableOpacityStyles,
  disableTouchableOpacity = false,
}: CustomButtonProps) => {
  return (
    <Fragment>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={activeOpacity || 0.7}
        hasTVPreferredFocus={hasTVPreferredFocus}
        tvParallaxProperties={tvParallaxProperties}
        touchSoundDisabled={disableTouchSound}
        className={`bg-secondary rounded-xl min-h-16 justify-center items-center align-middle ${containerStyles} ${
          isLoading ? "opacity-55" : "opacity-100"
        }`}
        style={touchableOpacityStyles}
        disabled={disableTouchableOpacity}
      >
        <Text className={`text-primary font-psemibold text-lg ${titleStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
      {renderAdditionComponent}
    </Fragment>
  );
};

export default CustomButton;
