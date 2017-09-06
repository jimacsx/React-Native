## Instalación
  * Node
  ```
  link: https://nodejs.org/en/download/
  ```
  * Create React Native App
  ```
  $ npm install -g create-react-native-app
  ```
  * Expo App (Play Store || App Store)
  ```
  Instalación desde el móvil
  ```

## Mi Primera React Native App
  * Creación
  ```
  $ create-react-native-app MyFirstApp
  ```
  * Acceso a MyFirstApp
  ```
  $ cd MyFirstApp
  ```
  * Iniciamos Servidor de Desarrollo
  ```
  $ npm start
  ```
  * Escaneamos código QR en Expo App
  * Al Escanear QR observaremos en nuestro móvil los Textos que se muestran en el archivo MyApp/App.js
  * Modificamos MyApp/App.js para hacer nuestro primer "Hola Mundo".
  ```App.js
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';

  export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Hola Mundo!</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  ```
