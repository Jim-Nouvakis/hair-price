import type { Meta, StoryObj } from "@storybook/react";
import Wizard from "./Wizard.tsx";

const meta: Meta<typeof Wizard> = {
  component: Wizard,
};

export default meta;
type Story = StoryObj<typeof Wizard>;

export const Primary: Story = {};
