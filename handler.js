'use strict';
const os = require('os');

module.exports.getOsInfo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        osName: os.hostname(),
        osArch: os.arch(),
        osPlatform: os.platform(),
        osCPU: os.cpus(),
        // 1mb = 1048576
        osMemory: os.totalmem() / 1048576,
      },
      null,
      2
    ),
  };
};