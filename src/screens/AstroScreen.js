import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';


class AstroScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = `https://www.elle.ru/astro/gemini/day/`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.text())
            .then(res => {
                let astro = res.toString().split('class="articleParagraph articleParagraph_dropCap"><p>')[1].split('</p>')[0];

                Alert.alert('ok');
                this.setState({
                    data: astro.toString(),
                    error: null,
                    loading: false,
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
                Alert.alert('Не удалось получить данные');
            });
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Загрузка...</Text>
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}

export default AstroScreen;
