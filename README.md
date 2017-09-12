## Mi Primera React Native App
  * Instalación
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
  * Mi Primera App en Expo App
  <img height="320" src="https://github.com/jimacsx/React-Native/blob/master/MyFirstApp/public/img/MyFirstApp.jpeg"/>
  <br>

## Desarrollo de una App Nativa (Android / iOS) con Js y React
<details>
  <summary><b>Instalación de Dependencias</b></summary>
  <br>
  <ul>
    <li>Accedemos al apartado "Buildin projects with Native Code" dentro de la documentación de React Native (https://facebook.github.io/react-native/docs/getting-started.html#content).</li>
    <li>Dentro del enlace encontraremos la configuración requerida para cada SO.
      <ul>
        <li>macOS   -> iOS</li>
        <li>macOS   -> Android</li>
        <li>linux   -> Android</li>
        <li>windows -> Android</li>
      </ul>
    </li>
  </ul>
</details>
<br>
<details>
  <summary><b>Instalación de React Native CLI</b></summary>
  <br>
  <ul>
    <li>$ npm install -g react-native-cli</li>
    <li>Debemos exportar react-native a nuestras variables de entorno o path (mac/linux) para no tener problemas al correr el comando.</li>
    <li>Para exportar react-native a $PATH en linux/unix hacemos:
      <ul>
        <li>Agregamos en /etc/enviroment la ruta en donde se instaló react-native, algo como: PATH=$PATH:reactNativePath</li>
        <li>O editamos ~/.bashrc agregando una linea parecida a: export PATH=$PATH:reactNativePath</li>
      </ul>
    </li>
    <li>Para exportar react-native a $PATH en macOS hacemos:
      <ul>
        <li>Agregamos en /etc/paths la ruta en donde se instaló react-native</li>
        <li>O editamos cualquiera de los siguientes archivos:
          <ul>
            <li>/etc/profile</li>
            <li>~/.bash_profile</li>
            <li>~/.bash_login   (if .bash_profile does not exist)</li>
            <li>~/.profile      (if .bash_login does not exist)</li>
            <li>agregando una linea parecida a: export PATH=$PATH:reactNativePath</li>
          </ul>  
        </li>
      </ul>
    </li>
  </ul>
</details>
<br>
<details>
  <summary><b>Creamos una nueva Aplicación</b></summary>
  <br>
  <ul>
    <li>$ react-native init MyNativeApp</li>
    <li>$ cd MyNativeApp</li>
  </ul>
</details>
<br>
<details>
  <summary><b>Preparamos el dispositivo Android / iOS para correr nuestra Aplicación</b></summary>
  <br>
  <ul>
    <li>Hay dos maneras de correr nuestra App:
      <ul>
        <li>Utilizando un dispositivo virtual.</li>
        <li>Utilizando un dispositivo físico.</li>
      </ul>
    </li>
    <li>Para lo anterior checamos documentacion (https://facebook.github.io/react-native/docs/getting-started.html) en el apartado "Preparing the Android device".</li>
  </ul>
</details>
<br>
<details>
  <summary><b>Corremos nuestra App Utilizando un Dispositivo Virtual</b></summary>
  <br>
  <ul>
    <li>En esta ocasión sólo trabajaremos en Android. Así que las siguientes instrucciones estaran basadas para Android con Android Studio.</li>
    <li>Editamos el archivo 'index.android.js' para obtener nuestro primer 'Hola Mundo!'</li>
    <li>Antes de correr la aplicación debemos tener encendido nuestro Dispositivo Virtual con Android Studio.
    <li>Para correr la App utilizamos los siguientes comandos:
      <ul>
        <li>Para iOS
          <ul>
            <li>$ react-native run-ios</li>
          </ul>
        </li>
        <li>Para Android
          <ul>
            <li>$ react-native run-android</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Al correr al app en Android obtendremos lo siguiente:
      <br>
      <br>
      <img height="420" src="https://github.com/jimacsx/React-Native/blob/2820415e455ddbe34098b63b38049ca201a2a8b5/MyNativeApp/images/hola_mundo_android.png"/>
    </li>
  </ul>
</details>
<br>
## Agregamos Ant Mobile para el uso y creación de Componentes
<details>
  <summary><b>Instalación de Dependencias</b></summary>
  <br>
  <ul>
    <li>Nota: todos los comandos se deben correr dentro de la carpeta MyNativeApp, esta para que las dependencias a instalar sean agregadas al archivo package.json</li>
    <li> $ npm install antd-mobile --save </li>
    <li> $ npm install babel-plugin-import --save-dev </li>
  </ul>
</details>
<br>
<details>
  <summary><b>Configuración .babelrc</b></summary>
  <br>
  <ul>
    <li>Esta configuración es para evitar conflictos al querer hacer uso de <b><a href='https://mobile.ant.design'>Ant Mobile</a></b></li>
  </ul>
  ´´´
  {"plugins": [["import", { "libraryName": "antd-mobile" }]]}
  ´´´
</details>
<br>
