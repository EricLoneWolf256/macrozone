# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


# MacroZone - React Native Crash Course

A macro tracking app built with React Native and Expo. Track your daily meals and monitor your macros (calories, protein, carbs, fat) with a clean, modern UI.

> **📝 Following along with the course?** Check out the [STEPS.md](STEPS.md) file for the complete step-by-step guide with all the code for each section. The drawing from the video is also in this repo.

<p align="center">
  <img src="assets/screen.png" alt="MacroZone App" width="300" />
</p>

## Features

- Add meals with calorie and macro information
- Track daily totals for calories, protein, carbs, and fat
- View all meals or recent meals on the home screen
- Share and copy meal data
- Haptic feedback for interactions
- Daily reminder notifications (iOS)
- Data persistence with AsyncStorage
- Tab-based navigation with a modern UI

## Tech Stack

- [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 55)
- [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) for local data persistence
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) for reminders
- [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) for tactile feedback
- TypeScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [Expo Go](https://expo.dev/go) app on your phone, or an Android/iOS emulator

### Installation

```bash
cd macrozone
npm install
```

### Run the App

```bash
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS) to run on your device.

## Course Steps

The full step-by-step guide with all the code for the crash course is available in the [STEPS.md](STEPS.md) file.

## License

MIT