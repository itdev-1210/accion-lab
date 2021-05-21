import { useCallback } from 'react';

import './App.css';

import Allocation from './Allocation'

const assetAllocations = [
  {
    assetClassName: 'Equity',
    assetClassHandle: '1~20~313',
    subAllocations: [
      {
        name: 'Equity Market Neutral',
        assetClassHandle: '1~20~128',
        percentage: 20,
      },
      { name: 'Hedged Equity', assetClassHandle: '1~20~129', percentage: 0 },
      { name: 'Event Driven', assetClassHandle: '1~20~130', percentage: 10 },
      { name: 'Managed Futures', assetClassHandle: '1~20~131', percentage: 0 },
    ],
  },
  {
    assetClassName: 'Fix Income',
    assetClassHandle: '1~20~302',
    subAllocations: [
      { name: 'All Cap', assetClassHandle: '1~20~101', percentage: 0 },
      { name: 'Large-Cap Core', assetClassHandle: '1~20~112', percentage: 0 },
      { name: 'Large-Cap Growth', assetClassHandle: '1~20~113', percentage: 0 },
      { name: 'Large-Cap Value', assetClassHandle: '1~20~114', percentage: 50 },
      { name: 'Mid-Cap Core', assetClassHandle: '1~20~117', percentage: 0 },
      { name: 'Mid-Cap Growth', assetClassHandle: '1~20~118', percentage: 0 },
      { name: 'Mid-Cap Value', assetClassHandle: '1~20~119', percentage: 0 },
      { name: 'REITs', assetClassHandle: '1~20~120', percentage: 0 },
      { name: 'Small-Cap Core', assetClassHandle: '1~20~123', percentage: 10 },
      { name: 'Small-Cap Growth', assetClassHandle: '1~20~124', percentage: 10 },
      { name: 'Small-Cap Value', assetClassHandle: '1~20~125', percentage: 0 },
    ],
  },
 {
    assetClassName: 'Cash',
    assetClassHandle: '1~20~301',
    subAllocations: [
      { name: 'All Cash', assetClassHandle: '1~20~101', percentage: 20 },
      { name: 'Liquid Cash', assetClassHandle: '1~20~111', percentage: 10 },
      { name: 'Net Cash', assetClassHandle: '1~20~112', percentage: 0 },
    ],
  },

]


function App() {
  const onAdd = useCallback(() => {
    alert('Add button clicked')
  }, [])

  return (
    <div className="App">
      <Allocation data={assetAllocations} onAdd={onAdd}/>
    </div>
  );
}

export default App;
