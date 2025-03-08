import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import '../global.css';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="medications" />
        {/* <Stack.Screen name="food" /> */}
        {/* <Stack.Screen name="profile" /> */}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}