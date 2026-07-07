import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../config/theme';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function StatCard({ icon, title, value, statBg, statInk, onPress }) {
  const Card = onPress ? TouchableOpacity : View;
  
  return (
    <Card style={styles.statCard} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.statIcon, { backgroundColor: statBg }]}>
        <Ionicons name={icon} size={moderateScale(24)} color={statInk} />
      </View>
      <View style={styles.statContent}>
        <Text style={styles.statLabel}>{title}</Text>
        <Text style={styles.statValue}>{value || 0}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  statCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xxxl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    minHeight: moderateVerticalScale(120),
    justifyContent: 'center',
    ...shadows.small,
  },
  statIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    fontSize: fontSize.small,
    fontWeight: fontWeight.medium,
    color: colors.caption,
    lineHeight: moderateVerticalScale(16),
    letterSpacing: 0.2,
  },
  statValue: {
    fontSize: fontSize.section,
    fontWeight: fontWeight.bold,
    color: colors.title,
    marginTop: spacing.xs,
    lineHeight: moderateVerticalScale(32),
    letterSpacing: -0.3,
  },
});
