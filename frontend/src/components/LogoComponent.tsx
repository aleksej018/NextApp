import {StyleSheet, Text, View} from 'react-native';

const LogoComponent = () => {
  return (
    <View style={{marginTop: '10%'}}>
      <Text style={styles.text}>Next</Text>
      <Text style={styles.text}>App</Text>
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 65,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'BentonSansExtraCompBlack',
    fontStyle: 'italic',
  },
});
