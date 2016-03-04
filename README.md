# React Native Intents

This module tries to abstract open `intents` independently of the platform (iOS or Android).


## Use

`React Native Intents` has a static method which receives a URL and open it in Safari (or other app using URL schemes) or default Android browser. You can see more info [after](#under-the-hood).

```js

var Intents = require('react-native-intents');
Intents.openURL("http://maps.google.com/?q=Madrid");

```



## Installation

Install module via npm:

```
npm install ticketea/react-native-intents --save
```


### Android app

Add `React Native Intents` to your `./android/settings.gradle` file as follows:

```
include ':app', ':rn-intents'
project(':rn-intents').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-intents/android')
```

Include `React Native Intents` as dependency in `./android/app/build.gradle` file:

```
dependencies {
	...
    compile project(':rn-intents')
}
```

Finally, you need to add the package in the `ReactInstanceManager` of your `./android/app/src/main/java/your/bundle/MainActivity.java`:

```java

import com.ticketea.intents.UniversalIntentPackage; <-- import this one

...


@Override
protected void onCreate(Bundle savedInstanceState) {
	...
	
	mReactInstanceManager = ReactInstanceManager.builder()
	.setApplication(getApplication())
	.addPackage(new UniversalIntentPackage())  <-- add this line
	.build();
	
	...
}

...

```


After that, you should be able to execute `react-native run-android` command to compile app as usual.



## Under the hood

### iOS
On iOS, it uses [LinkIOS](https://facebook.github.io/react-native/docs/linkingios.html) which allows to perform an `openURL` method like you'd can using Obj-C:

```objc
[[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"http://domain.com"]]
```

Depending on URL schemes, this URLs can be opened in different apps. If you need more info about available URL schemes, go to [handleopenurl.com](http://handleopenurl.com/scheme).


### Android
On Android, we've done a `NativeModule` which performs a typical intent opening the url, as you can see [the implementation](android/src/main/java/com/ticketea/intents).



## License
MIT