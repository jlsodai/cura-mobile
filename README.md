# Cura Mobile App

A mobile health application built with Expo and React Native, designed to help users manage their health metrics and medications.

## Features

- **Health Monitoring**: Track various health metrics including glucose levels
- **Medication Management**: View and manage daily medications
- **Health Status**: Monitor overall health status and trends
- **User-Friendly Interface**: Clean and intuitive UI for easy navigation

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Xcode (for iOS development)
- Android Studio (for Android development)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cura-mobile.git
   cd cura-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Scan the QR code with the Expo Go app (Android) or Camera app (iOS)
   - Or press `i` for iOS simulator or `a` for Android emulator

## Project Structure

```
.
├── app/                 # Main application code
│   ├── (tabs)/         # Tab navigation
│   ├── _layout.tsx     # Root layout
│   └── index.tsx       # Entry point
├── assets/             # Static assets (images, fonts, etc.)
├── components/         # Reusable components
│   ├── GlucoseMonitor.tsx
│   ├── HealthStatus.tsx
│   ├── InteractionChecker.tsx
│   └── TodaysMedication.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
└── ...
```

## Available Scripts

- `npm start` or `yarn start` - Start the development server
- `npm run android` or `yarn android` - Run on Android device/emulator
- `npm run ios` or `yarn ios` - Run on iOS simulator
- `npm run web` or `yarn web` - Run in web browser
- `npm test` or `yarn test` - Run tests

## Dependencies

- Expo SDK
- React Navigation
- React Native Reanimated
- React Native Gesture Handler
- React Native Safe Area Context
- React Native Screens
- Tailwind CSS (via NativeWind)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.
