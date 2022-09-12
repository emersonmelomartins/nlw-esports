import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="purple" />
      <Text style={styles.title}>Hello, React Native</Text>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#222",
    fontSize: 36,
  },
});
