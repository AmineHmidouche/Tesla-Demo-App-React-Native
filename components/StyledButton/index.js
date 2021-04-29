import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: backgroundColor}]}
        activeOpacity={0.5}
        onPress={ () => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;