import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { bankOptions, creditCardOptions, walletOptions } from '../utils/staticData';

const SecondPage = () => {
    const [accountName, setAccountName] = useState('');
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [selectedCreditCard, setSelectedCreditCard] = useState('');
    const [selectedWallet, setSelectedWallet] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleContinue = () => {
        if (!accountName || !selectedAccount || (selectedAccount === 'bank' && !selectedBank) || (selectedAccount === 'wallet' && !selectedWallet) || (selectedAccount === 'credit_card' && !selectedCreditCard)) {
            Alert.alert('Error', 'Please fill all the details');
        } else {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                router.push('home');
            }, 2000);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Add new account</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.subtitle}>Balance</Text>
                    <Text style={styles.balance}>$0.00</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={accountName}
                        onChangeText={setAccountName}
                    />
                    <Picker
                        selectedValue={selectedAccount}
                        onValueChange={(itemValue) => setSelectedAccount(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Account Type" value="" />
                        <Picker.Item label="Bank" value="bank" />
                        <Picker.Item label="Credit Card" value="credit_card" />
                        <Picker.Item label="Wallet" value="wallet" />
                    </Picker>
                    {selectedAccount === 'bank' && (
                        <Picker
                            selectedValue={selectedBank}
                            onValueChange={(itemValue) => setSelectedBank(itemValue)}
                            style={styles.picker}
                        >
                            {bankOptions.map((option) => (
                                <Picker.Item key={option.value} label={option.label} value={option.value} />
                            ))}
                        </Picker>
                    )}
                    {selectedAccount === 'credit_card' && (
                        <Picker
                            selectedValue={selectedCreditCard}
                            onValueChange={(itemValue) => setSelectedCreditCard(itemValue)}
                            style={styles.picker}
                        >
                            {creditCardOptions.map((option) => (
                                <Picker.Item key={option.value} label={option.label} value={option.value} />
                            ))}
                        </Picker>
                    )}
                    {selectedAccount === 'wallet' && (
                        <Picker
                            selectedValue={selectedWallet}
                            onValueChange={(itemValue) => setSelectedWallet(itemValue)}
                            style={styles.picker}
                        >
                            {walletOptions.map((option) => (
                                <Picker.Item key={option.value} label={option.label} value={option.value} />
                            ))}
                        </Picker>
                    )}
                    <TouchableOpacity style={styles.button} onPress={handleContinue}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    {showSuccess && <Text style={styles.successMessage}>Success! Redirecting...</Text>}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#7f3dff'
    },
    subContainer: {
        marginTop: 180,
        flex: 1,
        alignItems: 'left',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBlock: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
        color: 'white'
    },
    subtitle: {
        fontSize: 20,
        color: '#bcbcbc',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    balance: {
        fontSize: 45,
        color: 'white',
    },
    input: {
        width: '90%',
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16
    },
    picker: {
        width: '90%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#7f3dff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },
    successMessage: {
        color: 'green'
    }
});

export default SecondPage;
