import React from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors'
import MealItem from '../components/MealItem';

const MealList = props => {

    const renderMealItem = itemData => {
        return <MealItem title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            onSelectMeal={() => {
                props.navigation.navigate(
                    {
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }

                    });
            }} />
    }

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.listData}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default MealList;