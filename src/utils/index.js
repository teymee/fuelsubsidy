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
