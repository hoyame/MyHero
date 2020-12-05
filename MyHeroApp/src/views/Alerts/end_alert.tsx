import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';
import I18n from '../../i18n/i18n';


const EndAlertScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent title={I18n.t("alertMy")} navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <View style={{
                    height: 60,
                    marginBottom: 15,
                    borderRadius: 15,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0077be"
                }}>
                    <Text style={{
                        width: 250,
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 15      
                    }}>{I18n.t("alertThanks")}</Text>
                </View>

                <View>
                    <RateComponent title={I18n.t("alertAvisHero")} placeholder={I18n.t("alertDescHero")} onClick={() => null} />
                </View>
            </View>
        </>
    );
}

export default EndAlertScreen;