# Get started with React Native and MapLibre GL JS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Quick way to start a native map application with MapLibre GL JS using React Native.

A simple fullscreen map application as an example on how to use MapTiler maps together with React Native and MapLibre GL JS for your native app.

This app is made with [expo-dev-client](https://docs.expo.dev/development/getting-started/#installing--expo-dev-client--in-your-project) along with the plugin
[MapLibre React Native](https://maplibre.org/maplibre-react-native/).

1. Clone this repo
  ```sh
    git clone https://github.com/maptiler/get-started-react-native-maplibre-gl-js.git my-react-map
  ```

2. Navigate to the newly created project folder **my-react-map**
  ```sh
    cd my-react-map
  ```

3. Install dependencies
  ```sh
    npm install
  ```

4. :warning: Open the App.js file and replace **YOUR_MAPTILER_API_KEY_HERE** with your actual [MapTiler API key](https://cloud.maptiler.com/account/keys/).

  :information_source: If you don't have an API KEY you can create it for **FREE** at https://www.maptiler.com/cloud/

5. Build your project
  ```sh
    # Build your native Android project 
    npx expo run:android

    # Build your native iOS project
    npx expo run:ios
  ```

  * :warning: `expo run:ios` requires Xcode (macOS only) installed on your computer. See the [setup guide](https://reactnative.dev/docs/environment-setup)
  * :warning: `expo run:android` requires Android Studio and the Android SDK to be installed. See the [setup guide](https://reactnative.dev/docs/environment-setup)

6. You will find your app on your virtual device (Emulator) or physical device.

## Learn more

* [Expo Development builds](https://docs.expo.dev/development/getting-started/#installing--expo-dev-client--in-your-project)
* [Adding custom native code](https://docs.expo.dev/workflow/customizing/#generate-native-projects-with-prebuild)
* [MapLibre React Native documentation](https://maplibre.org/maplibre-react-native/docs/setup/getting-started)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
