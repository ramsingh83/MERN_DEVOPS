export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          createrName: 'Ram Singh',
          assetName: 'Full stack with MEARN',
          assetNumber: 1
        },
        {
          createrName: 'Pankaj Singh',
          assetName: 'Full Stack with MEAN',
          assetNumber: 2
        }
      ])
 
  })
}