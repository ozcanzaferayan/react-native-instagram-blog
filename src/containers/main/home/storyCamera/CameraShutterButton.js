import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

const CameraShutterButton = (props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  outerCircle: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 5,
    backgroundColor: 'transparent',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'white',
  },

});

export default CameraShutterButton;