import { Button } from "@mantine/core";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import React from "react";
import { useSelector } from "react-redux";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

const ExportPng = () => {
  const { aspectRatio } = useSelector((state) => state.canvas);

  const splittedRatio = () => {
    const splittedSized = aspectRatio.res.split(" ");
    return {
      width: parseInt(splittedSized[0]),
      height: parseInt(splittedSized[2]),
    };
  };
  const handleExportHtml = () => {
    const node = document.querySelector(".mainCanvas");
    toPng(node, {
      height: splittedRatio().height,
      width: splittedRatio().width,
    }).then(function (canvas) {
      console.log(splittedRatio());
      saveAs(canvas, "export.png");
    });
  };
  const handleExport = () => {
    html2canvas(document.querySelector(".mainCanvas"), {
      backgroundColor: null,
      //   scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: true,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    }).then(function (canvas) {
      console.log(canvas);
      var extra_canvas = document.createElement("canvas");
      extra_canvas.setAttribute("width", splittedRatio().width);
      extra_canvas.setAttribute("height", splittedRatio().height);

      var ctx = extra_canvas.getContext("2d");
      console.log(canvas.width, canvas.height, extra_canvas.height);
      ctx.drawImage(
        canvas,
        0,
        0,
        canvas.width,
        canvas.height,
        0,
        0,
        splittedRatio().width,
        splittedRatio().height
      );
      saveAs(extra_canvas.toDataURL(), "export.png");
    });
  };
  return (
    <Button
      onClick={handleExportHtml}
      variant="filled"
      className="btn-primary mx-3"
    >
      Export Png
    </Button>
  );
};

export default ExportPng;
