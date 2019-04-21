import React, { Component } from 'react';
import { StyleSheet, View,FlatList,Alert ,Platform,Text} from 'react-native';
import TimerTypes from './timeTypes';
export default class welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            GridViewItems: [
                { key: 'Blitz',min :7, sec:20 },
                { key: 'Blitz1',min :6, sec:20 },
                { key: 'Blitz2',min :5, sec:20 },
                { key: 'Blitz3',min :4, sec:20 },
                { key: 'Blitz4',min :3, sec:20 },
                { key: 'Blitz5',min :2, sec:20 }
            ]
        }
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
            <Text style = {styles.welcomeText}>Welcome ChessClock</Text>
                <FlatList
                    data={this.state.GridViewItems}
                    renderItem={({ item }) => 
                        <TimerTypes
                            navigation={this.props.navigation}
                            BlockStyle = {styles.GridViewBlockStyle}
                            TextStyle = {styles.GridViewInsideTextItemStyle}
                            title={item.key}
                            minute={item.min}
                            second={item.sec}
                        />
                    }
                    numColumns={2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#05BC87'
    },
    GridViewInsideTextItemStyle: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
    welcomeText: {
        color: '#0F2284',
        padding: 60,
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
    },
});
