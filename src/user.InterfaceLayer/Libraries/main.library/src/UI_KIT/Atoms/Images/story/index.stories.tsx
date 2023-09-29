import type { Meta, StoryObj } from "@storybook/react";
import { TestProps } from "../type";
import Image from "..";
import { ImageEnum } from "../enum";

const TestImage = ({ type, value, ...props }: TestProps) => {
  return <Image type={type} value={value} {...props} />;
};

const meta = {
  title: "Atoms/Image",
  component: TestImage,
  tags: ["img"],
  argTypes: {
    type: {
      options: ImageEnum,
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof TestImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageVariant: Story = {
  args: {
    type: ImageEnum.enum_defaultImage,
  },
};

export const Error: Story = {
  args: {
    type: ImageEnum.enum_defaultImage,
    isError: true,
  },
};

export const Loading: Story = {
  args: {
    type: ImageEnum.enum_defaultImage,
    isLoading: true,
  },
};
