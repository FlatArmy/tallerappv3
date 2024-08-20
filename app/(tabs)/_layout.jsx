import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants'

const TabIcon = ({ icon , color , name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarActiveTintColor: '#CDCDE0',
        tabBarActiveTintColor: '#FFA001',
        tabBarStyle:{
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        }
      }}
    >
      <Tabs.Sreeen
      name="home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon:({ color , focused }) => (
          <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
          />
        )
      }}
      />
      <Tabs.Sreeen
      name="bookmark"
      options={{
        title: 'Bookmark',
        headerShown: false,
        tabBarIcon:({ color , focused }) => (
          <TabIcon
            icon={icons.bookmark}
            color={color}
            name="Bookmark"
            focused={focused}
          />
        )
      }}
      />
      <Tabs.Sreeen
      name="create"
      options={{
        title: 'Create',
        headerShown: false,
        tabBarIcon:({ color , focused }) => (
          <TabIcon
            icon={icons.plus}
            color={color}
            name="Create"
            focused={focused}
          />
        )
      }}
      />
      <Tabs.Sreeen
      name="profile"
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon:({ color , focused }) => (
          <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
          />
        )
      }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout