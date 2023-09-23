import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "..";
import { TestProps } from "../type";
import { ButtonEnum } from "../enum";

const TestButton = ({ type, value, ...props }: TestProps) => {
  return <Button type={type} value={value} {...props} />;
};

const meta = {
  title: "Atoms/Button",
  component: TestButton,
  tags: ["button"],
  argTypes: {
    type: {
      options: ButtonEnum,
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonVariant: Story = {
  args: {
    type: ButtonEnum.enum_blackButton,
  },
};

export const Error: Story = {
  args: {
    type: ButtonEnum.enum_blackButton,
    isError: true,
  },
};

export const Loading: Story = {
  args: {
    type: ButtonEnum.enum_blackButton,
    isLoading: true,
  },
};
