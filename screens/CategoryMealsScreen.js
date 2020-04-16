import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors'
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    
    const categoryID = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID);

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryID) >= 0);
    return <MealList listData={displayMeals} navigation={props.navigation} />
}
CategoryMealsScreen.navigationOptions = (navigationData) => {
    //console.log(navigationData);
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        title: selectedCategory.title
    };
};


export default CategoryMealsScreen