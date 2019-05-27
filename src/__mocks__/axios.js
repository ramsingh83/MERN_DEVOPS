'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          createrName: 'Ram Singh',
          assetName: 'Full stack with MEARN',
          assetNumber: 1
        },
        {
          createrName: 'Pankaj Singh',
          assetName: 'React Master',
          assetNumber: 2
        }
      ]
    });
  },
  post: (data) => {
    return Promise.resolve({
      data: {
        asset: {
          createrName: data.createrName,
          assetName: data.assetName,
          assetNumber: data.assetNumber
        }
      }
    });
  }
};