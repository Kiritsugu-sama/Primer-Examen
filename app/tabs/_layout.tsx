import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";

export default function Layout() {
    const { isAllowed } = useAuth();
    if (!isAllowed) return <Redirect href="/login" />

    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    ),
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "gray",
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "add" : "add-outline"} size={size} color={color} />
                    ),
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "gray",
                }}
            />
        </Tabs>
    );
}
