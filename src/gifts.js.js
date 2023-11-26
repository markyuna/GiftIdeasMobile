import React, { useState } from "react";
import { SafeAreaView, Alert, Pressable, TextInput, StyleSheet, Text, View } from "react-native";

export default function Gifts() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const onTryAgain = () => {
    setResult('');
  };

  if (result) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Here are some great Christmas gift ideas 🎁 💡
        </Text>
        <Text style={styles.result}>{result}</Text>
        <Pressable onPress={onTryAgain} style={styles.button}>
          <Text style={styles.buttonText}>Try again</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const onSubmit = async () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.title}>Looking for the best gift ideas 🎁 💡</Text>
          <Image
            source={"/loading.gif"}
            style={styles.loading}
            resizeMode="contain"
          />
        </View>
      );
    }
    setLoading(true);
    setResult('');
    try {
      const response = await fetch("/api/generate-gifts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceMin, priceMax, gender, age, hobbies }),
      });
      const data = await response.json();
      setResult(data.result.replaceAll("\n", "\n"));
    } catch (e) {
      Alert.alert("Couldn't generate ideas", e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={styles.label}>For who is the gift?</Text>
      <View style={styles.selectorContainer}>
        <Text
          onPress={() => setGender("man")}
          style={[
            styles.selector,
            gender === "man" && { backgroundColor: "#10a37f" },
          ]}
        >
          Man
        </Text>

        <Text
          onPress={() => setGender("woman")}
          style={[
            styles.selector,
            gender === "woman" && { backgroundColor: "#10a37f" },
          ]}
        >
          Woman
        </Text>
      </View>
      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={styles.input}
        value={age.toString()}
        onChangeText={(s) => setAge(Number.parseInt(s))}
      />

      <Text style={styles.label}>Price from ($)</Text>
      <TextInput
        placeholder="Price from"
        keyboardType="numeric"
        style={styles.input}
        value={priceMin.toString()}
        onChangeText={(s) => setPriceMin(Number.parseInt(s))}
      />

      <Text style={styles.label}>Price to ($)</Text>
      <TextInput
        placeholder="Price to"
        keyboardType="numeric"
        style={styles.input}
        value={priceMax.toString()}
        onChangeText={(s) => setPriceMax(Number.parseInt(s))}
      />

      <Text style={styles.label}>Hobbies</Text>
      <TextInput
        placeholder="Hobbies"
        style={styles.input}
        value={hobbies}
        onChangeText={setHobbies}
      />

      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Generate gift ideas</Text>
      </Pressable>

      {/* if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <Text style={styles.title}>Looking for the best gift ideas 🎁 💡</Text>
            <Image
              source={"../assets/loading.gif"}
              style={styles.loading}
              resizeMode="contain"
            />
          </View>
        );
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,

    // borderColor: "#353740;",
    borderWidth: 1,
    borderRadius: 4,

    padding: 10,
    marginTop: 6,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  selectorContainer: {
    flexDirection: "row",
  },
  selector: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "gainsboro",
    margin: 5,
    padding: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#10a37f",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  loading: {
    width: "100%",
  },
});
