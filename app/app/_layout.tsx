import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router'



export default function RootLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>

            <SafeAreaProvider>
                <SafeAreaView style={{ flex:1, backgroundColor: "black" }}>

                    <Stack screenOptions={{headerShown: false,}}/>

                </SafeAreaView>
            </SafeAreaProvider>
        </ClerkProvider>
    );
}
