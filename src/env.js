// Initialize process.env if it doesn't exist
if (typeof process === 'undefined' || !process.env) {
  window.process = { env: {} };
}

// Define and export environment variables
export const REACT_APP_TENANT_API = process.env.REACT_APP_TENANT_API || "https://cairnsgames.co.za/php/tenant/";
export const REACT_APP_AUTH_API = process.env.REACT_APP_AUTH_API || "https://cairnsgames.co.za/php/auth/";
export const REACT_APP_SETTINGS_API = process.env.REACT_APP_SETTINGS_API || "https://cairnsgames.co.za/php/settings/api.php/";
export const REACT_APP_CONTENT_API = process.env.REACT_APP_CONTENT_API || "https://cairnsgames.co.za/php/content/";
export const REACT_APP_FILES = process.env.REACT_APP_FILES || "https://cairnsgames.co.za/files/";
export const REACT_APP_PAYWEB3_API = process.env.REACT_APP_PAYWEB3_API || "http://cairnsgames.co.za/php/payweb3/";

