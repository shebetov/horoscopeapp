import React, {useState} from 'react'
import {ScrollView, Text, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import Button from '../components/Button'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Background from '../components/Background'
import Header from '../components/Header'
import ManualScreen from '../screens/ManualScreen'
import AstroScreen from '../screens/AstroScreen'





function AdviceScreen() {
    const [text, setText] = useState("Выберите ваше настроение:");

    const onGoodPressHandler = event => setText("Посмотрите веселое видео!");
    const onBadPressHandler = event => setText("Псмотрите грустное видео!");

    return (
        <View>
            <Header>{text}</Header>

            <Button mode="outlined" onPress={onBadPressHandler}>
                Я веселый
            </Button>
            <Button mode="outlined" onPress={onGoodPressHandler}>
                Я грустный
            </Button>
        </View>
    );
}


function AboutScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Щебетов 981063</Text>
        </View>
    );
}


function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Avatar width={200} height={200} source={{ uri: 'https://image.pngaaa.com/683/2376683-middle.png' }} />
            <Text>Щебетов Алексей Анатольевич</Text>
            <Text>test@gmail.com</Text>

            <Button
                mode="outlined"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'StartScreen' }],
                    })
                }
            >
                Logout
            </Button>
        </View>
    );
}



const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Совет" component={AdviceScreen} />
                <Tab.Screen name="Гороскоп" component={AstroScreen} />
                <Tab.Screen name="Профиль" component={ProfileScreen} />
                <Tab.Screen name="О разработчике" component={AboutScreen} />
                <Tab.Screen name="Руководство" component={ManualScreen} />
            </Tab.Navigator>

    );
}
