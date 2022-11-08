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
  const [title, setTitle] = useState("");

  const id = Math.random().toString(16).slice(2);
  const newTitleInputRef = useRef<TextInput>(null);

  function handleAdd() {
    const newItem = {
      id,
      title,
      checked: false,
    };

    setItems([...items, newItem]);
    newTitleInputRef.current?.blur();
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

  const isFieldEmpty = !title.trim().length ? true : false;

  return (
    <Box flex={1} bg="gray.100">
      <HStack mt={-8} alignItems="center" px={6}>
        <Input
          newTitleInputRef={newTitleInputRef}
          placeholder="Adicione um item"
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
