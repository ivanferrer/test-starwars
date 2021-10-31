import { environment } from './environments/environment.ts';
const PROXY_CONFIG = {
    "/api/*": { // 
      "target": environment.apiUrl, // the target url for backend endpoint
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true
    }
}
module.exports = PROXY_CONFIG;