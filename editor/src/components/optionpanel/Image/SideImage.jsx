import _ from "lodash";
import { ActionIcon, Avatar, Checkbox, createStyles, Group, ScrollArea, Slider, Text } from "@mantine/core";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { CircleMinus } from "tabler-icons-react";
import {
  SET_CANVAS_SCALE,
  SET_SELECTED_IMAGES,
} from "../../../redux/actions/CanvasAction";
import { Accordion } from "@mantine/core";
import Dropper from "../../misc/FIleUpload/Dropper";



const useStyles = createStyles((theme) => ({
  dropper: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "#e3e3e3",
  },
  text: {
    color: theme.colorScheme !== "dark" ? theme.colors.dark[7] : "#e3e3e3",
  },
}));

const SideImage = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { selectedImages, canvasImageScale } = useSelector((state) => state.canvas);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: "image/jpeg,image/png",
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) => {
        const tempImg = [...selectedImages];
        tempImg.push({
          img: URL.createObjectURL(file),
          id: _.uniqueId("canvasImg_"),
        });
        dispatch({ type: SET_SELECTED_IMAGES, payload: tempImg });
      });
    },
  });

  const handleSlider = (value) => {
    const scaleValue = parseInt(value) / 100;
    dispatch({ type: SET_CANVAS_SCALE, payload: scaleValue });
  };

  const handleDelete = (id) => {
    const tempImg = selectedImages;
    const filteredImg = _.filter(tempImg, (o) => id !== o.id);
    dispatch({ type: SET_SELECTED_IMAGES, payload: filteredImg });
  };

  const AccordionLabel = ({ id, img }) => {
    return (
      <div className=" my-1 p-2 relative rounded-lg flex justify-between items-center">
        <img src={img} className="w-3/6 mx-2 object-cover rounded-lg h-14" />
      </div>
    );
  };

  const handleShadowCheck = (e, id) => {
    const imageNode = document.querySelector(`img[alt=${id}]`);
    if (e.target.checked) {
      imageNode.style.boxShadow = "rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px";
    } else {
      imageNode.style.boxShadow = null;
    }
  }
  return (
    <div className="h-5/6 w-11/12 mt-10 rounded-lg">
      <Dropper getInputProps={getInputProps} getRootProps={getRootProps} />

      <Slider
        radius="xl"
        min={25}
        max={200}
        onChange={handleSlider}
        step={1}
        defaultValue={canvasImageScale * 100}
        className="my-5"
        marks={[
          { value: 0.25, label: "25%" },
          { value: 100, label: "100%" },
          { value: 200, label: "200%" },
        ]}
      />

      <ScrollArea
        style={{ height: "500px", width: "100%" }}
        type="scroll"
        scrollbarSize={4}
        scrollHideDelay={200}
      >
        <Accordion iconPosition="right">
          {selectedImages.length > 0 &&
            selectedImages.map((selected) => (
              <Accordion.Item
                label={<AccordionLabel {...selected} />}
                key={selected.id}
                disableIconRotation
                className=""
                icon={
                  <ActionIcon
                    className=""
                    variant="transparent"
                    onClick={() => handleDelete(selected.id)}
                  >
                    <CircleMinus size={32} />
                  </ActionIcon>
                }
              >
                <Checkbox
                  label="Shadow"
                  defaultChecked
                  onChange={(e) => handleShadowCheck(e, selected.id)}
                />
              </Accordion.Item>
            ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
};

export default SideImage;
