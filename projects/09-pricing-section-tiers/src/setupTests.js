// src/setupTests.js

import "@testing-library/jest-dom";
import "./index.css"; // 主 CSS 文件，包含 Tailwind 的導入

// 如果需要，可以在這裡添加更多的全局設置

// TODO: 高流量模擬設置
// const enableHighTrafficSim =
//   process.env.REACT_APP_ENABLE_HIGH_TRAFFIC_SIMULATION === "true";

// if (enableHighTrafficSim) {
//   const originalFetch = global.fetch;
//   global.fetch = (...args) => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(originalFetch(...args)), Math.random() * 1000);
//     });
//   };

//   // 其他高流量模擬設置...
// }

//TODO:featureFlag功能
//import { featureFlags } from './src/config/featureFlags';
// if (featureFlags.newUI) {
//   // 設置新 UI 相關的模擬或準備工作
// }

// if (featureFlags.betaAPI) {
//   // 設置 beta API 相關的模擬
// }
