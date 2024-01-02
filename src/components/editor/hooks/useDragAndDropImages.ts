import { useDropzone } from "react-dropzone";

const useDragAndDropImages = ({ froalaEditorRef }) => {
  const handleOnDropImages = async (acceptedImages, _, event) => {
    const readFileAsync = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    // Used to prevent drag and dropping images from the editor itself
    // For some reason, when we drag and drop from the editor, we receive some items of type text, etc... but when we drag and drop images from elsewhere, we only receive files.
    if ([...event.dataTransfer.items].every((el) => el.kind === "file")) {
      for (const image of acceptedImages) {
        const dataUrl = await readFileAsync(image);
        froalaEditorRef.current.editor.image.insert(dataUrl, true, {
          alt: "dragged image",
        });
      }
    }
  };

  const { getRootProps } = useDropzone({
    onDrop: handleOnDropImages,
    noClick: true,
    accept: {
      "image/*": ["jpg", "jpeg", "png", "gif"],
    },
  });

  return { getRootProps };
};

export default useDragAndDropImages;
