create react native app using expo cli :
---------------------------------------

reference : 
https://docs.expo.dev/
https://reactnative.dev/
https://snack.expo.dev/

create expo react native :
1. expo init my-app
2. npx create-expo-app my-app

running :
yarn android
yarn ios

running ios :
open -a Simulator

show developer mennu expo :
press Ctrl + m for Android
press Cmd ⌘ + m for iOS
adb shell input keyevent 82

expo cli :
expo login
expo whoami
eas build:configure

config eas :
"preview": {
    "android": {
    "buildType": "apk"
    }
},

build apk :
eas build -p android --profile preview
expo build:status

config sdk (local.properties) : 
sdk.dir=/Users/arif/Library/Android/sdk

how to install navigation : 
reference navigation : https://reactnative.dev/docs/navigation
npm install @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context

m1 users :
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install