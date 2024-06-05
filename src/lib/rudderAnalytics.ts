import { RudderAnalytics } from '@rudderstack/analytics-js';

const rudderAnalytics = new RudderAnalytics();
rudderAnalytics.load(
  import.meta.env.VITE_RS_WRITE_KEY,
  import.meta.env.VITE_RS_DATA_PLANE_URL,
  {}
);

export { rudderAnalytics };