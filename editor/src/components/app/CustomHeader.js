import { Header, Text } from "@mantine/core";
import React from "react";
import ResolutionDrawer from "../misc/ResolutionDrawer/ResolutionDrawer";

const CustomHeader = () => {
  return (
    <Header className="appHeader h-full flex justify-between px-5" p="xs">
      <Text size="lg" color="white" weight="bold">
        Social Media Post Editor
      </Text>
      <ResolutionDrawer />
    </Header>
  );
};

export default CustomHeader;
