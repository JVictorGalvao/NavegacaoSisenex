import React from 'react'
import { View } from 'react-native';

interface SeparatorProps {
  size?: number
  vertical?: boolean
}

export const Separator: React.FC<SeparatorProps> = props => {
  const style = {
    width: props.vertical ? "100%" : props.size || 8,
    height: props.vertical ? props.size || 8 : "100%"
  }
  return (
    <View style={style}/>
  );
}