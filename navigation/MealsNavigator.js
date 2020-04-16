import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import FilterScreen from '../screens/FilterScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';


const defaultStackNavigatorOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator ({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals:{
        screen: CategoryMealsScreen
    },
    MealDetail : {
        screen: MealDetailScreen
    },

},
{
    defaultNavigationOptions : defaultStackNavigatorOptions
});

const FavNavigator = createStackNavigator ({
    Favorites : FavoritesScreen,
    MealDetail : MealDetailScreen
},
{
    defaultNavigationOptions : defaultStackNavigatorOptions
});

const tabScreenConfig = {
    Meals: {
        screen : MealsNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen : FavNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    }
};
const MealsFavTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor: 'white',
    shifting: false,
    barStyle: {
        backgroundColor: Colors.primaryColor
    }
}) :  createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions : {
        activeTintColor: Colors.accentColor,
    }
});
const FilterNavigator = createStackNavigator ({
    Filters : FilterScreen
},
{
    defaultNavigationOptions : defaultStackNavigatorOptions
});
const RouteConfigs = {
    MealsFavs: MealsFavTabNavigator,
    Filters: FilterNavigator
}
const MainNavigator = createDrawerNavigator(RouteConfigs);
export default createAppContainer(MainNavigator)