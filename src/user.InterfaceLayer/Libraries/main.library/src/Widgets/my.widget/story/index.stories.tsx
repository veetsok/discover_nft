import type { Meta, StoryObj } from "@storybook/react";
import MyWidget from "..";

const TestWidget = ({ type, title, ...props }: TestProps) => {
  return <MyWidget />;
};

const meta = {
  title: "Example/MyWidget",
  component: TestWidget,
  tags: ["widget"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MyWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    text: "First test text",
  },
};

export const Second: Story = {
  args: {
    text: "Second test text",
  },
};

export const Third: Story = {
  args: {
    text: "Third test text",
  },
};
