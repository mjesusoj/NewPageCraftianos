import { trackEvent } from "@aptabase/web";
export * from './HomeScreen'

trackEvent("app_started"); // An event with no properties
trackEvent("page_view", { name: "Home Page", path: "/home" }); // An event with a custom property