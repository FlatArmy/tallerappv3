import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomBotton = ({ title , handlePress, containerStyles, extStyles, isLoading}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disable={isLoading}
      >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomBotton