import { Box, HStack, Text } from "native-base";
import Logo from "../assets/logo.svg";

interface HeaderProps {
  totalItems: number;
}

export function Header({ totalItems }: HeaderProps) {
  return (
    <Box height={40} px={6}>
      <HStack h="100%" alignItems="center" justifyContent="space-between">
        <Logo />
        <HStack>
          <Text fontWeight="regular" color="white" fontSize="md" mr={1}>
            {!totalItems ? null : "Você tem"}
          </Text>
          <Text fontWeight="bold" color="white" fontSize="md">
            {!totalItems
              ? null
              : totalItems > 1
              ? `${totalItems} itens na lista`
              : `${totalItems} item na lista`}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}
