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
  import { StyleSheet, Text, View, Image } from 'react-native';

  export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Hola Mundo!</Text>
          <Image
            source={{uri: 'http://frostney.github.io/talks/react-native/slides/images/react-logo.png'}}
            style={{width: 100, height:100}}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title : {
      fontSize: 18,
      color: "#fff"
    }
  });
  ```
  <br>
  <img height="320" src="https://github.com/jimacsx/React-Native/blob/master/MyFirstApp/public/img/MyFirstApp.jpeg"/>
  <br>

## Desarrollo de una App Nativa con Js y React
<details>
  <summary>Instalación de Dependencias</summary>
  * Accedemos al apartado "Buildin projects with Native Code" dentro de la documentación de React Native (https://facebook.github.io/react-native/docs/getting-started.html#content).
  * Dentro del enlace encontraremos la configuración requerida para cada SO.
</details>
