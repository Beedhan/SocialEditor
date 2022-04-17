import { ActionIcon, Button, Navbar, Text } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { ColorPicker, CursorText, Gizmo, Photo } from "tabler-icons-react";
import { SET_NAV_PANEL } from "../../redux/actions/CanvasAction";
import PanelHandler from "../../components/optionpanel/PanelHandler";
const CustomNavbar = () => {
  const dispatch = useDispatch();
  const setNavbar = (item) => {
    dispatch({ type: SET_NAV_PANEL, payload: item });
  };

  return (
    <div className="flex w-full h-full">
      <Navbar width={{ base: 90 }} height="100vh" p="md">
        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("BACKGROUND")}
          >
            <ColorPicker size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" size="xs" className="text-center">
            Background
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("IMAGE")}
          >
            <Photo size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" size="xs" className="text-center">
            Image
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("TRANSFORM")}
          >
            <Gizmo size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" size="xs" className="text-center">
            Transform
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("TEXTS")}
          >
            <CursorText size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" size="xs" className="text-center">
            Text
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("IMAGE")}
          >
            <Photo size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" size="xs" className="text-center">
            Layout
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("IMAGE")}
          >
            <Photo size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" size="xs" className="text-center">
            Branding
          </Text>
        </Navbar.Section>

        <Navbar.Section mt="md">
          <ActionIcon
            variant="transparent"
            size="xl"
            color="teal"
            onClick={() => setNavbar("IMAGE")}
          >
            <Photo size={30} />
          </ActionIcon>
          <Text sx={(theme) => (
            {
              color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
            }
          )} color="white" className="text-center" size="xs">
            Misc
          </Text>
        </Navbar.Section>
      </Navbar>
      <PanelHandler />
    </div>
  );
};

export default CustomNavbar;
