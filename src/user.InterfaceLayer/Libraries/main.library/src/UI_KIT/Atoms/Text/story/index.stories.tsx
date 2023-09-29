import type { Meta, StoryObj } from "@storybook/react";
import { TestProps } from "../type";
import Text from "..";
import { TextEnum } from "../enum";

const TestText = ({ type, title, ...props }: TestProps) => {
  return <Text type={type} title={title} {...props} />;
};

const meta = {
  title: "Atoms/Text",
  component: TestText,
  tags: ["atom"],
  argTypes: {
    type: {
      options: TextEnum,
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof TestText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextVariant: Story = {
  args: {
    type: TextEnum.enum_H1Text,
  },
};

export const Error: Story = {
  args: {
    type: TextEnum.enum_H1Text,
    isError: true,
  },
};

export const Loading: Story = {
  args: {
    type: TextEnum.enum_H1Text,
    isLoading: true,
  },
};
