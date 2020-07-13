import React from 'react'
import { View, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"


interface BackButtonProps {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export const BackButton: React.FC<BackButtonProps> = props => {
  return (
    <View
    style={{
      flexDirection: "row",
      width: "100%",
      paddingTop: 14,
      paddingBottom: 0,
      justifyContent: "flex-start"
    }}
  >
    <MaterialIcons
      name="arrow-back"
      color="black"
      size={25}
      onPress={props.onPress}
    />
  </View>
  );
}