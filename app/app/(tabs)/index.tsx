import { Image, Text, TouchableOpacity, View, Pressable} from "react-native";
import {styles} from "../../styles/auth.styles"
import {router, Link} from "expo-router"

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"./notifications"}>visit notifications screen</Link>
    </View>
  );
}
