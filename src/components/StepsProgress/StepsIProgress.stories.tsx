import type { Meta, StoryObj } from "@storybook/react";
import StepsProgress from "./StepsProgress.tsx";

const meta: Meta<typeof StepsProgress> = {
  component: StepsProgress,
};

export default meta;
type Story = StoryObj<typeof StepsProgress>;

export const Primary: Story = {
  args: {
    totalSteps: 6,
    currentStep: 2,
  },
};
