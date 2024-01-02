import { doNothing } from "../utils";

const useOnChange = ({
  parentContainerDivRef,
  froalaEditorRef,
  onChange,
  setReadOnlyValue,
}) => {
  const handleOnChange = (value) => {
    let foundFlaw = false;
    let newFormattedValue = value;

    // Track the cursor's last position (tag and offset)
    const tagPath = [];
    let cursorPosition;
    if (
      foundFlaw &&
      window.getSelection().rangeCount > 0 &&
      froalaEditorRef.current.editor
    ) {
      try {
        const range = window.getSelection().getRangeAt(0);
        cursorPosition = range.startOffset;
        //@ts-ignore
        let cursorTag = window.getSelection().baseNode.parentNode;
        let froalaParent =
          parentContainerDivRef.current.querySelector(".fr-element");
        const getPathToParent = (tag, path) => {
          let cursorTagParent = tag.parentNode;
          let parentIsFroala = cursorTagParent === froalaParent;
          let cursorTagIndexInParent = Array.prototype.indexOf.call(
            cursorTagParent.children,
            tag
          );
          path.push(cursorTagIndexInParent);
          if (parentIsFroala) {
            return path;
          } else {
            return getPathToParent(cursorTagParent, path);
          }
        };
        getPathToParent(cursorTag, tagPath);

        // Now we update the froala content
        froalaEditorRef.current.editor.html.set(newFormattedValue);
        setReadOnlyValue(newFormattedValue);

        const restoreCursorPosition = () => {
          try {
            const selection = window.getSelection();
            const range = document.createRange();
            const tag = tagPath
              .reverse()
              .reduce(
                (acc, current) => acc.children[current] || acc,
                froalaParent
              );
            try {
              range.setStart(tag.firstChild, cursorPosition);
            } catch {
              // Sometimes in our formatting, we take off a character. This means that cursorPosition will change. So we adapt it here
              range.setStart(tag.firstChild, tag.firstChild.length);
            }
            selection.removeAllRanges();
            selection.addRange(range);
          } catch {
            doNothing();
          }
        };

        // Now we restore the cursor
        restoreCursorPosition();
      } catch (e) {
        doNothing();
      }
    } else {
      setReadOnlyValue(value);
    }

    if (onChange) {
      onChange(newFormattedValue);
    }
  };

  return { handleOnChange };
};

export default useOnChange;
