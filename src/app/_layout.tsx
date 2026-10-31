import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: "(drawer)",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="new-message"
        options={{ presentation: "modal", title: "New message" }}
      />
    </Stack>
  );
}