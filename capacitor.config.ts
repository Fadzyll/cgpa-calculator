import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ums.cgpacalculator',
  appName: 'CGPA Calculator',
  webDir: 'dist',
  android: {
    buildOptions: {
      releaseType: 'APK'
    }
  }
};

export default config;
