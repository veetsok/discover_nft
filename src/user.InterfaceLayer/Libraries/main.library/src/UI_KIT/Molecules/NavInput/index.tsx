import React, { useState } from "react";
import Input from "../../Atoms/Input";
import { InputTypeEnum } from "../../Atoms/Input/enum";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";
import * as ST from "./styled";

interface NavInputProps {}

const NavInput: React.FC<NavInputProps> = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <ST.Input>
        <Input
          type={InputTypeEnum.TEXT}
          value={value}
          placeholder="Search Art Work / Creator"
          onChange={(val: string) => setValue(val)}
        />
      </ST.Input>
      <Button type={ButtonEnum.enum_blackButton} children="Connect Wallet" />
    </>
  );
};
export default NavInput;
