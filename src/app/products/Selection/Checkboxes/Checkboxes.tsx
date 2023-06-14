import React, { useState } from 'react';
import { ArrowDown, checkboxesConfigCountertops } from './checkboxesConfig';

const Checkboxes = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([0]);

  const handleToggle = (index) => {

    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }

  };

  return (
    <>
      {checkboxesConfigCountertops.map((config, index) => (
        <div className="mb-[35px]" key={config.title}>
          <div className="flex items-center justify-between">
            <h3 className="mb-[18px]">{config.title}</h3>
            <ArrowDown onClick={() => handleToggle(index)} />
          </div>
          {expandedIndexes.includes(index) && (
            <div className="flex flex-col">
              {config.checkboxes.map((checkbox) => (
                <div key={checkbox.label}>
                  <input
                    type="checkbox"
                    id={`checkbox-${checkbox.label}`}
                    checked={checkbox.isChecked}
                    className="form-checkbox border-solid border-additional2 h-5 w-5"
                  />
                  <label
                    htmlFor={`checkbox-${checkbox.label}`}
                    className="ml-2 text-gray-700"
                  >
                    {checkbox.label}
                  </label>
                </div>
              ))}
              <div className="flex items-center mt-[18px]">
                <h3 className="mr-[13px]">See more</h3>
                <ArrowDown onClick={() => handleToggle(index)} />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Checkboxes;
