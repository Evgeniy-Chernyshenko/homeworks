import React, { useCallback, useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
  const [value1, setValue1] = useState(70);
  const [value2, setValue2] = useState(150);

  const onChangeRange = useCallback((value: [number, number]) => {
    setValue1(value[0]);
    setValue2(value[1]);
  }, []);

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div style={{ display: 'flex' }}>
        <span style={{ flexBasis: '35px' }}>{value1}</span>
        <SuperRange
          // сделать так чтоб value1 изменялось
          value={value1}
          onChangeRange={(value1) => setValue1(value1)}
          min={5}
          max={250}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <span style={{ flexBasis: '35px' }}>{value2}</span>
        <SuperRange
          // сделать так чтоб value1 изменялось
          value={value2}
          onChangeRange={(value2) => setValue2(value2)}
          min={5}
          max={250}
        />
      </div>
      <div>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={onChangeRange}
          min={5}
          max={250}
        />
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
