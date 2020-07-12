import React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface ScreenTitleProps {
  title: string
  centerSubtitle?: boolean
  subtitle?: string
  style?: ViewStyle
}

export const ScreenTitle: React.FC<ScreenTitleProps> = props => {
    return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.header}>{props.title}</Text>
      {props.subtitle && (
        <Text
          style={[
            styles.subtitle,
            {
              textAlign: 'left',
              color: "black",
              fontSize: 16
            }
          ]}
        >
          {props.subtitle}
        </Text>
      )}
    </View>);
}

const styles = StyleSheet.create({
  subtitle: {
    paddingVertical: 8
  },
  titleContainer: {
    paddingTop: 30,
    paddingBottom: 16
  },
  header: {
    lineHeight: 40,
    fontSize: 40,
    letterSpacing: 0,
  },
})