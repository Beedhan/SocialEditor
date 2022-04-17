import { Header, Text } from "@mantine/core";
import React from "react";
import ExportPng from "../../components/app/ImageExport/ExportPng";
import ResolutionDrawer from "../../components/app/ResolutionDrawer/ResolutionDrawer";
import Switcher from "../../components/app/ThemeSwitcher/Switcher";

const CustomHeader = () => {
  return (
    <Header className="appHeader h-full flex justify-between px-5 py-3" p="xs">
      <Text size="lg" weight="bold" sx={(theme) => (
        {
          color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
        }
      )}>
        Social Media Post Editor
      </Text>
      <div className="flex justify-center items-center">
        <Switcher />
        <ExportPng />
        <ResolutionDrawer />
      </div>
    </Header>
  );
};

export default CustomHeader;
