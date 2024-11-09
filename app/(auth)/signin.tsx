import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Formfield from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const Signin = () => {
  const [form, setForm] = useState<any>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSignin = async () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="justify-center h-full w-full px-4 my-6 min-h-[83vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[135px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <Formfield
            title="Email"
            value={form.email}
            placeholder="email"
            handleChangeText={(e: any) =>
              setForm({
                ...form,
                email: e,
              })
            }
            formStyles="mt-7"
            keyType="email-address"
          />
          <Formfield
            title="Password"
            placeholder="password"
            value={form.password}
            handleChangeText={(e: any) =>
              setForm({
                ...form,
                password: e,
              })
            }
            formStyles="mt-7"
            keyType="password"
          />
          <CustomButton
            title="Signin"
            handlePress={handleSignin}
            containerStyles="mt-7"
          />

          <View className="justify-center pt-5 flex flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/signup"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
