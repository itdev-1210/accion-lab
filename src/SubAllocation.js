import React from 'react'

function SubAllocation({data, handleChange}) {  
  return (
    <div className="sub-allocation">
      <div>{`Sub Asset ${data.name}`}</div>
      <div>
        <input type='number' step='1' value={data.percentage} onChange={handleChange}/><span>%</span>
      </div>
    </div>
  )
}

export default SubAllocation