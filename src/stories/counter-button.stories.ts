import type { Meta, StoryObj } from '@storybook/react';
import { CounterButton } from "@/features/counter-button";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof CounterButton> = {
  title: 'Example/CounterButton',
  component: CounterButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Multiplied: Story = {
  args: {
    start: 10,
    multiply: 5,
  },
};

export const Clicking: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const counterButton = canvas.getByRole('button');
    await expect(counterButton).toBeInTheDocument();
    await userEvent.click(counterButton);
    await userEvent.click(counterButton);
    await userEvent.click(counterButton);

    await expect(counterButton.innerHTML).toEqual("Counter: 3");
  },
}