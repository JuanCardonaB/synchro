import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.text, fontSize: 24, fontWeight: "bold" }}>
        ¡Bienvenido!
      </Text>
      <Text style={{ color: colors.text, marginTop: 8 }}>
        Proyecto limpio y listo para comenzar
      </Text>
    </View>
  );
}
