import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { Sun, Moon } from "tabler-icons-react";

const Switcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      size="xl"
      radius="md"
      variant="filled"
      className={`${
        colorScheme === "dark" ? "btn-primary-light" : "btn-primary"
      },py-5`}
      onClick={toggleColorScheme}
    >
      {colorScheme === "dark" ? <Sun /> : <Moon />}
    </ActionIcon>
  );
};

export default Switcher;
