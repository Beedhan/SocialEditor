import { ActionIcon, Button, Navbar, Text } from "@mantine/core";
import React from "react";
import { ColorPicker, Settings } from "tabler-icons-react";
import PanelHandler from "../optionpanel/PanelHandler";
const CustomNavbar = () => {
  return (
    <div className="flex w-full h-full">
      <Navbar width={{ base: 90 }} height="100vh" p="md">
        <Navbar.Section mt="md">
          <ActionIcon variant="transparent" size="xl" color="teal">
            <ColorPicker size={30} />
          </ActionIcon>
          <Text color="white" size="xs">
            Background
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <ActionIcon variant="transparent" size="xl" color="teal">
            <Settings size={30} />
          </ActionIcon>
          <Text color="white" size="xs">
            Settings
          </Text>
        </Navbar.Section>
      </Navbar>
      <PanelHandler />
    </div>
  );
};

export default CustomNavbar;
