import { Checkbox, HStack, VStack, Text } from "native-base";
import { AlertDialogDeleteItem } from "./AlertDialogDeleteItem";

interface ItemProps {
  item: {
    id: string;
    title: string;
    checked: boolean;
  };
  checked: boolean;
  handleChecked: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function Item({
  item,
  checked,
  handleChecked,
  handleDelete,
}: ItemProps) {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg={{
        linearGradient: {
          colors: ["transparent", "white"],
          start: [1, 0],
          end: [0, 1],
        },
      }}
      px={6}
      py={4}
      mt={1}
    >
      <VStack onTouchStart={() => handleChecked(item.id)} flex={1}>
        <Checkbox
          size="sm"
          isChecked={checked}
          value={item.id}
          _checked={{
            bg: "green.500",
            borderColor: "green.500",
          }}
        >
          <Text
            color={checked ? "green.500" : "gray.500"}
            fontWeight="medium"
            fontSize="sm"
            textDecorationLine={checked ? "line-through" : "none"}
          >
            {item.title}
          </Text>
        </Checkbox>
      </VStack>

      <AlertDialogDeleteItem handleRemoveItem={() => handleDelete(item.id)} />
    </HStack>
  );
}
