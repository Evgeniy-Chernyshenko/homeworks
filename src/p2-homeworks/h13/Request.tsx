import { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { api } from "./api";

export const Request = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [responseData, setResponseData] = useState<null | string>(null);

  const onChangeCheckedCallback = (checked: boolean) => {
    setIsChecked(checked);
  };

  const onButtonClickCallback = async () => {
    const responseData = await api.updateSuccess(isChecked);

    if (responseData) {
      setResponseData(JSON.stringify(responseData, null, 2));
    }
  };

  return (
    <>
      <div>
        <SuperCheckbox onChangeChecked={onChangeCheckedCallback}>
          checkbox
        </SuperCheckbox>
      </div>
      <div>
        <SuperButton onClick={onButtonClickCallback}>button</SuperButton>
      </div>
      {responseData && (
        <pre
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
          }}
        >
          {responseData}
        </pre>
      )}
    </>
  );
};
