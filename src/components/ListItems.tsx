import { Box, FlatList, HStack, useToast } from "native-base";
import { useRef, useState } from "react";
import { TextInput } from "react-native";
import { Items } from "../screens/Home";
import { AlertDialogNewItem } from "./AlertDialogNewItem";
import { Input } from "./Input";
import { Item } from "./Item";
import { ListEmpty } from "./ListEmpty";

interface ListProps {
  items: Items[];
  setItems: (items: Items[]) => void;
}

export function ListItems({ items, setItems }: ListProps) {
  const toast = useToast();
  const inputRef = useRef<TextInput>(null);
  const [title, setTitle] = useState("");

  const isFieldEmpty = !title.trim().length;

  function handleAdd() {
    const newItem = {
      id: String(new Date().getTime()),
      title,
      checked: false,
    };

    setItems([...items, newItem]);
    inputRef.current?.blur();
    setTitle("");
  }

  function handleChecked(id: string) {
    const itemsChecked = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );

    setItems(itemsChecked);
  }

  function handleDelete(id: string) {
    const filteredTasks = items.filter((item) => item.id !== id);
    setItems(filteredTasks);
    toast.show({
      title: "Item deletado com sucesso!",
      placement: "bottom",
      bgColor: "red.500",
    });
  }

  return (
    <Box flex={1} bg="gray.100">
      <HStack mt={-8} alignItems="center" px={6}>
        <Input
          inputRef={inputRef}
          placeholder="Escreva o nome do item..."
          flex={1}
          onChangeText={setTitle}
          value={title}
        />
        <AlertDialogNewItem handleAdd={handleAdd} isEmptyTitle={isFieldEmpty} />
      </HStack>
      <FlatList
        my={8}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            item={item}
            checked={item.checked}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
