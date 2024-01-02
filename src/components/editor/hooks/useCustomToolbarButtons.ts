import React from "react";
import Froalaeditor from "froala-editor";

import {
  rgbToHex,
  getSelectionContainer,
  setSelectionAsCurrentClickedElement,
} from "../utils";

const useCustomToolbarButtons = ({
  brushTitle,
  froalaEditorRef,
  parentContainerDivRef,
}) => {
  const [isBrushingIconActive, setIsBrushingIconActive] = React.useState(false);

  // brush refs
  let selectedElementComputedStyle = React.useRef(null);
  let isBold = React.useRef(false);
  let isItalic = React.useRef(false);
  let isUnderlined = React.useRef(false);
  let isCrossed = React.useRef(false);
  let isUl = React.useRef(false);
  let isOl = React.useRef(false);
  let isSuperScript = React.useRef(false);
  let isSubScript = React.useRef(false);

  let pClasses = React.useRef([]);
  // end refs

  React.useEffect(() => {
    Froalaeditor.DefineIconTemplate(
      "brushIconTemplate",
      '<svg width="16px" height="16px" viewBox="0 0 205 252" version="1.1"> <path d="M170,14 L200.007537,14 C202.769057,14 205,11.7636493 205,9.00497092 L205,4.99502908 C205,2.23382212 202.764798,0 200.007537,0 L101.992463,0 C99.2309431,0 97,2.23635069 97,4.99502908 L97,9.00497092 C97,11.7661779 99.2352017,14 101.992463,14 L133,14 L133,238 L101.992463,238 C99.2309431,238 97,240.236351 97,242.995029 L97,247.004971 C97,249.766178 99.2352017,252 101.992463,252 L200.007537,252 C202.769057,252 205,249.763649 205,247.004971 L205,242.995029 C205,240.233822 202.764798,238 200.007537,238 L170,238 L170,14 Z" id="Combined-Shape" ></path> <path d="M65,222.280829 C60.6131176,222.280829 56.3742162,222.280828 52.9999995,222.280828 L53,170 L42,170 L42,222.560593 C38.6130246,222.560593 34.3763308,222.560593 30.0000005,222.560594 L30,170 L19,170 L19,222.560595 C16.324865,222.560595 13.8463369,222.560595 11.7612725,222.560596 C-0.369586438,222.560599 1.28381746,211.509313 1.28381746,211.509313 C1.28381746,211.509313 0.389689944,177.756 0.396571277,158 L94.7408232,158 C94.7392736,177.793089 93.8535396,211.229548 93.8535396,211.229548 C93.8535396,211.229548 95.5069435,222.280834 83.3760845,222.280831 C81.2553782,222.28083 78.7276415,222.28083 76.0000002,222.28083 L76,170 L65,170 L65,222.280829 Z M0.574534036,147 C0.579768387,146.896149 0.585131638,146.794755 0.590625514,146.695866 C1.28381748,134.218409 -0.797112286,122.434146 16.8792816,116.195422 C34.5556755,109.956698 28.6662536,107.530522 30.3978792,95.7462576 C32.1295048,83.961993 25.8921298,78.069863 25.8921315,44.7966496 C25.892133,17.9607206 38.5169467,13.9220173 45.5220939,13.3637617 C45.6089814,13.1340727 45.7002506,13.0164391 45.7960631,13.0164391 C49.8372056,13.0164389 69.2452237,11.2436713 69.2452255,44.5168847 C69.2452273,77.7900982 63.0078523,83.6822281 64.7394778,95.4664928 C66.4711034,107.250757 60.5816815,109.676933 78.2580754,115.915657 C95.9344693,122.154381 93.8535395,133.938644 94.5467315,146.416101 C94.5570586,146.601989 94.5669242,146.796724 94.5763397,147 L0.574534036,147 Z M47.5,41 C52.1944204,41 56,37.1944204 56,32.5 C56,27.8055796 52.1944204,24 47.5,24 C42.8055796,24 39,27.8055796 39,32.5 C39,37.1944204 42.8055796,41 47.5,41 Z" id="Combined-Shape" ></path> </svg>'
    );
    Froalaeditor.DefineIcon("brushIcon", {
      NAME: "brush",
      template: "brushIconTemplate",
    });
    Froalaeditor.RegisterCommand("brushButton", {
      title: brushTitle,
      focus: false,
      undo: false,
      icon: "brushIcon",
      refreshAfterCallback: false,
      callback: function () {
        if (!selectedElementComputedStyle.current) {
          // Start Automatic select of the whole word if nothing is selected
          let selectedText = window.getSelection().toString();
          if (selectedText.length === 0) {
            setSelectionAsCurrentClickedElement(getSelectionContainer());
            selectedText = window.getSelection().toString();
          }
          // End Automatic select of the whole word if nothing is selected

          let selectionContainer = getSelectionContainer();

          isBold.current = this.format.is("strong");
          isItalic.current = this.format.is("em");
          isUnderlined.current = this.format.is("u");
          isCrossed.current = this.format.is("s");
          isUl.current = this.format.is("UL");
          isOl.current = this.format.is("OL");
          isSuperScript.current = this.format.is("sup");
          isSubScript.current = this.format.is("sub");
          if (this.format.is("p", { class: "fr-text-spaced" })) {
            pClasses.current.push("fr-text-spaced");
          }
          if (this.format.is("p", { class: "fr-text-uppercase" })) {
            pClasses.current.push("fr-text-uppercase");
          }
          if (this.format.is("p", { class: "fr-text-bordered" })) {
            pClasses.current.push("fr-text-bordered");
          }
          if (this.format.is("p", { class: "fr-text-gray" })) {
            pClasses.current.push("fr-text-gray");
          }

          console.log("selectionContainer", selectionContainer);
          console.log(
            "style",
            window.getComputedStyle(selectionContainer).backgroundColor
          );
          selectedElementComputedStyle.current =
            window.getComputedStyle(selectionContainer);
          setIsBrushingIconActive(true);
        } else {
          selectedElementComputedStyle.current = null;
          setIsBrushingIconActive(false);
        }
      },
    });

    // Drop down
    Froalaeditor.DefineIcon("moreButtonsDropdownIcon", {
      NAME: "add",
      SVG_KEY: "add",
    });
    Froalaeditor.RegisterCommand("moreButtonsDropdown", {
      title: "More",
      type: "dropdown",
      icon: "moreButtonsDropdownIcon",
      undo: false,
      focus: false,
      options: {
        superscript: "Superscript",
        subscript: "Subscript",
      },
      refreshAfterCallback: true,
      callback: function (cmd, val, params) {
        switch (val) {
          case "superscript":
            this.commands.superscript();
            break;
          case "subscript":
            this.commands.subscript();
            break;
        }
      },
    });

    // Cut command
    Froalaeditor.DefineIconTemplate(
      "cutIconTemplate",
      '<svg fill="#000000"version="1.1" id="Capa_1" viewBox="0 0 309.694 309.694"><path d="M169.941,182.463l125.645,40.038c1.703,0.543,3.566,0.102,4.846-1.145c1.28-1.248,1.767-3.1,1.268-4.816c-5.93-20.375-21.613-36.46-41.832-42.903l-103.221-32.893l-8.899-27.925c0.832-0.193,1.656-0.416,2.472-0.676c20.449-6.517,30.154-31.434,22.095-56.726c-7.803-24.488-30.171-40.075-50.842-33.485c-19.629,6.254-30.345,30.837-22.096,56.728c0.017,0.052,0.035,0.102,0.052,0.153l15.499,48.637l-48.583-15.481c-0.069-0.022-0.137-0.048-0.206-0.07c-24.616-7.844-50.126,1.376-56.729,22.097c-6.516,20.449,8.193,42.781,33.485,50.841c24.63,7.848,50.126-1.384,56.727-22.095c0.262-0.821,0.477-1.646,0.671-2.472l27.929,8.899l22.001,69.042h37.483L169.941,182.463z M76.755,155.453c-2.157,6.771-14.017,10.517-26.572,6.515c-13.105-4.176-19.955-14.255-17.905-20.688c2.154-6.763,14.004-10.52,26.574-6.516C71.957,138.94,78.805,149.019,76.755,155.453z M128.76,44.799c6.577-2.101,16.574,4.996,20.688,17.905c4.176,13.104-0.082,24.521-6.515,26.571c-6.595,2.106-16.585-5.024-20.688-17.903C118.267,58.891,121.972,46.962,128.76,44.799z M151.869,164.391c-3.945,3.945-10.343,3.945-14.288,0c-3.946-3.946-3.946-10.343,0-14.289c3.945-3.945,10.343-3.945,14.288,0C155.816,154.048,155.816,160.444,151.869,164.391z"/><path d="M56.5,264.278H19.904H12.5c-6.903,0-12.5,5.597-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h7.404H56.5c6.903,0,12.5-5.597,12.5-12.5C69,269.875,63.403,264.278,56.5,264.278z"/><path d="M136.732,264.278h-44c-6.903,0-12.5,5.597-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h44c6.903,0,12.5-5.597,12.5-12.5C149.232,269.875,143.635,264.278,136.732,264.278z"/><path d="M216.963,264.278h-44c-6.903,0-12.5,5.597-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h44c6.903,0,12.5-5.597,12.5-12.5C229.463,269.875,223.866,264.278,216.963,264.278z"/><path d="M301.893,265.199c-1.451-0.589-3.035-0.921-4.698-0.921h-44c-6.903,0-12.5,5.597-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h44c1.663,0,3.247-0.332,4.698-0.921c4.573-1.858,7.802-6.339,7.802-11.579C309.694,271.538,306.466,267.058,301.893,265.199z"/></svg>'
    );
    Froalaeditor.DefineIcon("cutIcon", {
      NAME: "cut",
      template: "cutIconTemplate",
    });
    Froalaeditor.RegisterCommand("cutButton", {
      title: "Cut",
      focus: false,
      undo: false,
      icon: "cutIcon",
      refreshAfterCallback: false,
      callback: function () {
        document.execCommand("cut");
      },
    });

    // Copy command
    Froalaeditor.DefineIconTemplate(
      "copyIconTemplate",
      '<svg viewBox="0 -0.5 25 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    );
    Froalaeditor.DefineIcon("copyIcon", {
      NAME: "copy",
      template: "copyIconTemplate",
    });
    Froalaeditor.RegisterCommand("copyButton", {
      title: "Copy",
      focus: false,
      undo: false,
      icon: "copyIcon",
      refreshAfterCallback: false,
      callback: function () {
        document.execCommand("copy");
      },
    });
  }, []);

  // Used to listen to text selection event for brushing
  React.useEffect(() => {
    const handleMouseUp = (e) => {
      // Apply brushing result here:
      if (froalaEditorRef?.current && selectedElementComputedStyle.current) {
        let selectedText = window.getSelection().toString();
        if (selectedText.length === 0) {
          setSelectionAsCurrentClickedElement(e.srcElement);
          selectedText = window.getSelection().toString();
        }

        const editor = froalaEditorRef?.current.editor;
        const selectionContainer = getSelectionContainer();
        if (!selectionContainer) {
          return;
        }

        Array.from(selectedElementComputedStyle.current)
          .filter((key) => key === "margin" || key === "line-height")
          .forEach((key) =>
            selectionContainer.style.setProperty(
              key,
              selectedElementComputedStyle.current.getPropertyValue(key),
              selectedElementComputedStyle.current.getPropertyPriority(key)
            )
          );

        if (!isBold.current && editor.format.is("strong")) {
          editor.commands.bold(false);
        }
        if (isBold.current && !editor.format.is("strong")) {
          editor.commands.bold();
          isBold.current = false;
        }

        if (!isItalic.current && editor.format.is("em")) {
          editor.commands.italic(false);
        }
        if (isItalic.current && !editor.format.is("em")) {
          editor.commands.italic();
          isItalic.current = false;
        }

        if (!isUnderlined.current && editor.format.is("u")) {
          editor.commands.underline(false);
        }
        if (isUnderlined.current && !editor.format.is("u")) {
          editor.commands.underline();
          isUnderlined.current = false;
        }

        if (!isCrossed.current && editor.format.is("s")) {
          editor.commands.strikeThrough(false);
        }
        if (isCrossed.current && !editor.format.is("s")) {
          editor.commands.strikeThrough();
          isCrossed.current = false;
        }

        if (isOl.current && !editor.format.is("OL")) {
          editor.lists.format("OL");
          isOl.current = false;
        }
        if (isUl.current && !editor.format.is("UL")) {
          editor.lists.format("UL");
          isUl.current = false;
        }

        if (pClasses.current.length > 0) {
          editor.format.apply("p", { class: pClasses.current.join(" ") });
          pClasses.current = [];
        }

        if (!isSubScript.current && editor.format.is("sup")) {
          editor.commands.superscript(false);
        }
        if (isSuperScript.current && !editor.format.is("sup")) {
          editor.commands.superscript();
          isSuperScript.current = false;
        }

        if (!isSubScript.current && editor.format.is("sub")) {
          editor.commands.subscript(false);
        }
        if (isSubScript.current && !editor.format.is("sub")) {
          editor.commands.subscript();
          isSubScript.current = false;
        }

        editor.format.applyStyle(
          "font-size",
          selectedElementComputedStyle.current?.getPropertyValue("font-size")
        );
        editor.format.applyStyle(
          "font-family",
          selectedElementComputedStyle.current?.getPropertyValue("font-family")
        );
        editor.colors.text(
          rgbToHex(
            selectedElementComputedStyle.current?.getPropertyValue("color")
          )
        );
        editor.colors.background(
          rgbToHex(
            selectedElementComputedStyle.current?.getPropertyValue(
              "background-color"
            )
          )
        );

        setIsBrushingIconActive(false);
        selectedElementComputedStyle.current = null;
      }
    };

    if (parentContainerDivRef.current) {
      const editableContainer =
        parentContainerDivRef.current.querySelector(".fr-element");
      if (editableContainer) {
        editableContainer.addEventListener("mouseup", handleMouseUp);
      }
    }

    return () => {
      if (parentContainerDivRef.current) {
        const editableContainer =
          parentContainerDivRef.current.querySelector(".fr-element");
        if (editableContainer) {
          editableContainer.removeEventListener("mouseup", handleMouseUp);
        }
      }
    };
  }, [
    parentContainerDivRef.current,
    parentContainerDivRef.current?.querySelector(".fr-element"),
  ]);

  return { isBrushingIconActive };
};

export default useCustomToolbarButtons;
