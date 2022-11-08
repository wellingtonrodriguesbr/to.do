import { AlertDialog, Text, Button } from "native-base";
import { CaretRight } from "phosphor-react-native";
import { useRef, useState } from "react";

interface AlertDialogNewItemEmptyProps {
  isEmptyTitle: boolean;
  handleAdd: () => void;
}

export function AlertDialogNewItem({
  isEmptyTitle,
  handleAdd,
}: AlertDialogNewItemEmptyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <>
      <Button
        bg="white"
        h="97%"
        px={5}
        ml={-2}
        borderLeftWidth={1}
        borderRadius={0}
        borderRightRadius={3}
        borderLeftColor="gray.100"
        _pressed={{
          bg: "white",
        }}
        onPress={isEmptyTitle ? () => setIsOpen(true) : handleAdd}
      >
        <CaretRight size={20} color="#c4c4cc" />
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header borderColor="transparent">
            <Text fontWeight="bold" fontSize="xl" color="gray.700">
              Campo vazio
            </Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            Escreva o nome do item que você deseja adicionar
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
}
