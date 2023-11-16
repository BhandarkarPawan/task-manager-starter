import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from 'react';

function TodoItem({checked, description}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleChange}
          />
        }
        label={
          <span className={isChecked ? 'line-through text-gray-500' : ''}>
            {description}
          </span>
        }
      />
    </div>
  );
}

export default TodoItem;
