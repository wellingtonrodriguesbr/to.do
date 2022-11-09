import { AlertDialog, Button, Text } from "native-base";
import { Trash } from "phosphor-react-native";
import { useRef, useState } from "react";

interface AlertDialogDeleteItemProps {
  handleRemoveItem: () => void;
}

export function AlertDialogDeleteItem({
  handleRemoveItem,
}: AlertDialogDeleteItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <>
      <Button
        bg="transparent"
        pr={0}
        _pressed={{
          bg: "transparent",
        }}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Trash size={20} color="#B2B2B2" />
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
              Deletar item
            </Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            Tem certeza que deseja deletar este item?
          </AlertDialog.Body>
          <AlertDialog.Footer borderColor="transparent">
            <Button.Group space={2}>
              <Button bgColor="red.500" onPress={onClose} ref={cancelRef}>
                Cancelar
              </Button>
              <Button variant="unstyled" onPress={handleRemoveItem}>
                Sim, deletar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
}
