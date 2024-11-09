import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";

interface FormFieldProp {
  title: string;
  value: any;
  handleChangeText: any;
  formStyles: string;
  keyType?: string;
  placeholder: string;
}

const Formfield = ({
  title,
  value,
  handleChangeText,
  formStyles,
  keyType,
  placeholder,
}: FormFieldProp) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const secureTextCondition = title === "Password" && !showPassword;

  return (
    <View className={`space-y-2 ${formStyles}`}>
      <Text className="text-base text-green-100 font-pmedium">{title}</Text>
      <View
        className={`border-2 ${
          isFocused ? "border-secondary" : "border-black-200"
        } w-full h-16 px-4 bg-black-100 rounded-2xl flex flex-row items-center`}
      >
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={secureTextCondition}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {/* {title === "Password" ? (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null} */}
        {title === "Password" && (
          <Pressable onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Formfield;
