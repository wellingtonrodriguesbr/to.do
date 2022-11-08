import { Center, Text } from "native-base";

export function ListEmpty() {
  return (
    <Center flex={1}>
      <Text color="gray.500" textAlign="center" px={12}>
        Sua lista está vazia, os itens que você adicionar será mostrado aqui
        para você :D
      </Text>
    </Center>
  );
}
