import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Svg, Polygon } from 'react-native-svg';

import { colors } from '../../utils/theme';

const PolygonShape = ({ value, setConditionValue, editable }) => {
  return (
    <View style={styles.conrainer}>
      <Svg height="120" width="140">
        <Polygon
          points="80,10 140,60 80,110 20,60"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </Svg>
      <View style={styles.textContainer}>
        <TextInput editable={editable} numberOfLines={2} style={styles.input} value={value} onChangeText={(text) => setConditionValue(text)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conrainer: {
    position: 'relative',
    marginRight: 20,
    marginTop: -10,
    marginBottom: -10,
  },
  input: {
    width: 85,
    height: 80,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: 20,
    left: 35,
    zIndex: 2,
  },
});

export default PolygonShape;