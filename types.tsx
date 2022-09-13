/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ItemList: {
    title: 'string',
  };
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type TWeatherResponce = {
  current_weather: {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    time: string,
  }
  daily: {
    time: Array<string>,
    weathercode: Array<number>,
    temperature_2m_max: Array<number>,
    temperature_2m_min: Array<number>,
  }
  daily_units: {
    time: string,
    weathercode: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
  }
  elevation: number,
  generationtime_ms: number,
  latitude: number,
  longitude: number,
  timezone: string,
  timezone_abbreviation: string,
  utc_offset_seconds: number,
};

export type TCity = {
  country: string,
  latitude: number,
  longitude: number,
  name: string,
};

export type TCityResponce = {
  generationtime_ms: number,
  results: Array<TCity> | undefined
}


// admin1
// :
// "Алтай"
// admin1_id
// :
// 1506272
// country
// :
// "Россия"
// country_code
// :
// "RU"
// country_id
// :
// 2017370
// elevation
// :
// 473
// feature_code
// :
// "PPL"
// id
// :
// 1503092
// latitude
// :
// 51.09583
// longitude
// :
// 87.93389
// name
// :
// "Ко"
// population
// :
// 300
// ranking
// :
// 0.13868405
// timezone
// :
// "Asia/Barnaul"