import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ITheme, theme } from "ccmtypes";
import EmailBoxes from "../components/emailBoxes";
import { EmailBoxViewTypeEnum } from "../components/emailBoxes/EmailBoxes";
import { createUseStyles } from "react-jss";
import Input from "../components/inputs/input";
import Selector from "../components/inputs/selector";
import FroalaEditorComponent from "react-froala-wysiwyg";
import Froala from "../components/editor";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/EmailBoxes",
  component: EmailBoxes,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof EmailBoxes>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    theme,
    newEmailBoxTitle: "Nouveau mail",
    boxes: [
      { viewType: EmailBoxViewTypeEnum.Reduced, title: "Nouveau mail" },
      { viewType: EmailBoxViewTypeEnum.Reduced, title: "Nouveau mail" },
    ],
    sendEmailButtonProps: {
      label: "Nouveau Mail",
      withoutBorder: true,
    },
    EmailFormComponent: () => <EmailFormExample />,
  },
};

const useStyles = createUseStyles((theme: ITheme) => ({
  emailFormContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,

    "& >div": {
      paddingTop: 5,
      paddingBottom: 0,
    },
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

interface IEmailFormExampleProps {}

const EmailFormExample: React.FunctionComponent<IEmailFormExampleProps> = (
  props: IEmailFormExampleProps
) => {
  const styles = useStyles({ theme });

  const froalaEditorRef: React.MutableRefObject<FroalaEditorComponent> =
    React.useRef<FroalaEditorComponent>(null);

  return (
    <div className={styles.emailFormContainer}>
      <Selector label="De *" options={[]} placeholder="De" />
      <Selector label="A *" options={[]} placeholder="A" />
      <Selector label="cc" options={[]} placeholder="cc" />
      <Selector label="cci" options={[]} placeholder="cci" />
      <Input label="Object *" placeholder="Object" />

      <br />

      <Froala ref={froalaEditorRef} />
    </div>
  );
};
