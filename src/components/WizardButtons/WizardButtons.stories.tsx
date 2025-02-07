import type { Meta, StoryObj } from "@storybook/react";
import WizardButtons from "./WizardButtons.tsx";

const meta: Meta<typeof WizardButtons> = {
  component: WizardButtons,
};

export default meta;
type Story = StoryObj<typeof WizardButtons>;

export const Primary: Story = {};
