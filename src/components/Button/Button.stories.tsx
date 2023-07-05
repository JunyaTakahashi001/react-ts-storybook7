import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primay: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    color: 'danger',
  },
};