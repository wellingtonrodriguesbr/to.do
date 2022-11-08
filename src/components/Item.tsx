import { Checkbox, HStack, Input, Button, VStack } from "native-base";
import { PencilSimpleLine, X } from "phosphor-react-native";
import { useRef, useState } from "react";
import { TextInput } from "react-native";
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
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const titleRef = useRef<TextInput>();

  function handleEditTitle() {
    titleRef.current?.focus();
    setIsEdit(!isEdit);
  }

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      w="full"
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
          isDisabled={isEdit}
          value={item.id}
          _checked={{
            bg: "green.500",
            borderColor: "green.500",
          }}
        >
          <Input
            ref={titleRef}
            value={editTitle}
            variant="unstyled"
            focusable={isEdit}
            color={checked ? "green.500" : "gray.500"}
            onChangeText={setEditTitle}
            fontWeight="medium"
            fontSize="sm"
            flex={1}
            textDecorationLine={checked ? "line-through" : "none"}
            editable={isEdit}
          />
        </Checkbox>
      </VStack>

      <HStack space={1}>
        <Button
          bg="transparent"
          onPress={handleEditTitle}
          _pressed={{
            bg: "transparent",
          }}
          borderRadius={0}
          borderRightColor="#b2b2b240"
          borderRightWidth={1}
        >
          {isEdit ? (
            <X size={20} color="#B2B2B2" />
          ) : (
            <PencilSimpleLine size={20} color="#B2B2B2" />
          )}
        </Button>
        <AlertDialogDeleteItem
          isEdit={isEdit}
          handleRemoveItem={() => handleDelete(item.id)}
        />
      </HStack>
    </HStack>
  );
}
