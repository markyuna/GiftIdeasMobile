import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native';


export default function Gifts() {
    const [gender, setGender] = useState('man');
    const [age, setAge] = useState(30);
    const [priceMin, setPriceMin] = useState(25);
    const [priceMax, setPriceMax] = useState(100);
    const [hobbies, setHobbies] = useState('');
    const [loading, setLoading] = useState(false);
    
    const [result, setResult] = useState('');
    
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

            <Text style={styles.selector}>Woman</Text>
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
    </View>
    )
}



const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        
        borderColor: "#353740;",
        borderWidth: 1,
        borderRadius: 4,
        
        padding: 16,
        marginTop: 6,
        marginBottom: 12,
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
})