import Constants, { ExecutionEnvironment } from 'expo-constants';

const isExpoGo =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

if (!isExpoGo) {
  const Notifications = require('expo-notifications');
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export const requestPermissions = async (): Promise<boolean> => {
  if (isExpoGo) return false;
  const Notifications = require('expo-notifications');
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
};

export const scheduleMealReminders = async () => {
  if (isExpoGo) return;
  const Notifications = require('expo-notifications');
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'MacroZone',
      body: "Don't forget to log your lunch!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 12,
      minute: 0,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'MacroZone',
      body: 'Time to log your dinner!',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 18,
      minute: 0,
    },
  });
};

export const cancelMealReminders = async () => {
  if (isExpoGo) return;
  const Notifications = require('expo-notifications');
  await Notifications.cancelAllScheduledNotificationsAsync();
};