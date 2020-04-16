import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
const MealDetailScreen = props => {
    const categoryID = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === categoryID);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}
MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const mealDetail = MEALS.find(meal => meal.id === mealId);
    return {
        title: mealDetail.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title='Favorite' iconName='ios-star' onPress={() => {
            console.log("Mark as favorite!!");
        }}/></HeaderButtons>
    };
};
const styles = StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});



export default MealDetailScreen;