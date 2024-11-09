import { Text, TouchableOpacity, TVParallaxProperties } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handlePress: any;
  containerStyles: string;
  isLoading: boolean;
  activeOpacity?: number;
  titleStyles?: string;
  hasTVPreferredFocus?: boolean;
  tvParallaxProperties?: TVParallaxProperties;
  disableTouchSound?: boolean;
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
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={activeOpacity || 0.7}
      hasTVPreferredFocus={hasTVPreferredFocus}
      tvParallaxProperties={tvParallaxProperties}
      touchSoundDisabled={disableTouchSound}
      className={`bg-secondary rounded-xl min-h-16 justify-center items-center align-middle ${containerStyles} ${
        isLoading ? "opacity-55" : "opacity-100"
      }`}
    >
      <Text className={`text-primary font-psemibold text-lg ${titleStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
