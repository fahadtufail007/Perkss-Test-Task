import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { colors } from '../../utils/theme';

interface Props {
  value?: string;
  borderRadius?: any;
  bgColor?: any;
  setStartValue?: any;
  editable: any;
}

const Box = ({ setStartValue, borderRadius, value, bgColor = colors.lightRedColor, editable }: Props) => {
  return (
    <View style={[styles.cirlcelContainer, { borderRadius: borderRadius, backgroundColor: bgColor }]}>
      <TextInput editable={editable} numberOfLines={2} style={styles.input} value={value} onChangeText={(text) => { setStartValue(text) }} />
    </View>
  );
};

const styles = StyleSheet.create({
  cirlcelContainer: {
    backgroundColor: colors.lightRedColor,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  input: {
    width: '100%',
    height: 80,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: colors.blackColor,
    textAlign: 'center',
  },
});

export default Box;
