import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/ManishBangari/11f1f6c525cde3896de066434479cc28/raw/6834c78da5aeb00fc9b5ecbbcdbf2e301b9b4cdd/WHO-global-Covid19-dataset';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[1]);

  return data;
};

