import { EventService } from '../EventService';

export const APP_LIFE_CYCLE_EVENTS = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
};

export const AppLifecycle = new EventService(APP_LIFE_CYCLE_EVENTS);
