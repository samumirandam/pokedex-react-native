import { Text, View } from "react-native";
import React from "react";

import useAuth from "../hooks/useAuth";

import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

export default function AccountScreen() {
  const { auth } = useAuth();
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
