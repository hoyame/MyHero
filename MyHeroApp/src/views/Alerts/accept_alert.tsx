import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import AccountStats from '../../components/AccountStats';
import HeaderComponent from '../../components/Header/header';
import CheckBox from '@react-native-community/checkbox';

const screenWidth = Math.round(Dimensions.get('window').width - 70);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginTop: 20,
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
      color: "red"
    },
    label: {
      margin: 8,
      fontSize: 16
    },
  });

  
export const SenderAcceptAlertPage = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
            }}>
                <AccountStats />
                
                <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={setSelection}
                      style={styles.checkbox}
                      tintColors={{ true: '#6d9bff', false: '#6d9bff' }}
                    />
                    <Text style={styles.label}>Vous voulez activer votre camera ?</Text>
                </View>

                <View style={{
                    height: 210,
                    borderRadius: 10,
                    marginBottom: 20,
                    width: screenWidth,
                    backgroundColor: '#e1e1e1',
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: "#6d9bff",
                        fontSize: 30,
                        marginBottom: 10,
                        textAlign: "center"
                    }}>Aperçu camera</Text>

                    <ActivityIndicator size="large" color="#6d9bff" />
                </View>

                <TouchableOpacity>
                    <View style={{
                        height: 60,
                        marginBottom: 15,
                        borderRadius: 8,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: "#e1e1e1"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 22      
                        }}>Vous n'etes plus en danger</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export const HelperAcceptAlertPage = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

        </>
    );
}