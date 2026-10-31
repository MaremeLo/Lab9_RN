import { StyleSheet, Text, View } from "react-native";

export function Bubble({ text, mine }: { text: string; mine: boolean }) {
  return (
    <View style={[styles.bubble, mine ? styles.mine : styles.theirs]}>
      <Text style={mine ? styles.mineText : styles.theirsText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "75%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  mine: { alignSelf: "flex-end", backgroundColor: "#1a5276" },
  theirs: { alignSelf: "flex-start", backgroundColor: "#eee" },
  mineText: { color: "#fff" },
  theirsText: { color: "#000" },
});