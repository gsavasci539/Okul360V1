import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../config/theme';

export default function Card({ children, style, onPress, ...props }) {
  const Card = onPress ? TouchableOpacity : View;
  
  return (
    <Card 
      style={[styles.card, style]} 
      onPress={onPress} 
      activeOpacity={onPress ? 0.7 : 1}
      {...props}
    >
      {children}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xxxl,
    padding: spacing.xxl,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...shadows.small,
  },
});
