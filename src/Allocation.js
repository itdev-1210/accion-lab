import React, { useCallback, useEffect, useState } from 'react'

import SubAllocation from './SubAllocation'

function Allocation({data, onAdd}) {
  const [allocations, setAllocations] = useState(data)
  const [isDisable, setDisable] = useState(true)
  const [total, setTotal] = useState(0)

  const calcTotal = useCallback(() => {
    let temp_total = 0
    allocations.map((allocation) => {
      const sub_total = allocation.subAllocations.reduce((a, {percentage}) => a + parseInt(percentage), 0)
      temp_total += sub_total
      return allocation
    })

    setTotal(temp_total)
    setDisable(temp_total !== 100)
  }, [allocations])

  useEffect(() => {
    calcTotal()
  }, [allocations, calcTotal])

  const handleChangeInput = useCallback((e, cIndex, pIndex) => {
    const new_allocations = Object.assign([], allocations)
    new_allocations[pIndex]['subAllocations'][cIndex].percentage = e.target.value
    setAllocations(new_allocations)
  }, [allocations])
  
  return (
    <div>
      {allocations.map((allocation, index) => <div className="one-allocation" key={index}>
        <div className="one-location-title">{allocation.assetClassName || 'Template'}</div>
        {allocation.subAllocations && 
          allocation.subAllocations.map(
            (subAllocation, iindex) => <SubAllocation 
              key={iindex} data={subAllocation} handleChange={(e) => handleChangeInput(e, iindex, index)}/>
          )}
      </div>)}

      <p>{`Total: ${total}`}</p>

      <button onClick={onAdd} disabled={isDisable}>Add</button>
    </div>
  )
}

export default Allocation