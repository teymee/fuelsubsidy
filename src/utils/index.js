export const getUserOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Android detection
  if (/android/i.test(userAgent)) {
    return "android";
  }

  // iOS detection (iPhone, iPad, iPod)
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }

  return "windows";
};

export const trackEvent = (eventName, eventParam) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag("event", eventName, eventParam);
  }
};


  export const googlePlayTracker = {
    event: "google_play_click",
    label: "Google Play Store Button Click",
  };

  export const appleStoreTracker = {
    event: "apple_store_click",
    label: "Apple Store Button Click",
  };