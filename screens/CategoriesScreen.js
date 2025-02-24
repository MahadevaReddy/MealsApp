import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate(
                    {
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }

                    });
            }} />
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}
CategoriesScreen.navigationOptions = navData => {
    return {
        title: 'Meal Categories',
        headerLeft: () =>
            <HeaderButtons
                HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
    };
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen