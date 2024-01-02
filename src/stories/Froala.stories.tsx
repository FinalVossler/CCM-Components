import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ITheme, theme } from "ccmtypes";
import Froala from "../components/editor/Froala";
import FroalaEditorComponent from "react-froala-wysiwyg";

interface IFroalaExampleProps {
  error?: string;
  theme?: ITheme;
}
const FroalaExample: React.FunctionComponent<IFroalaExampleProps> = (
  props: IFroalaExampleProps
) => {
  const froalaEditorRef: React.MutableRefObject<FroalaEditorComponent> =
    React.useRef<FroalaEditorComponent>(null);

  return (
    <Froala ref={froalaEditorRef} brushTitle="Brush" error={props.error} />
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/FroalaExample",
  component: FroalaExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof FroalaExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    theme,
  },
};

export const WithError: Story = {
  args: {
    theme,
    error: "Error",
  },
};
