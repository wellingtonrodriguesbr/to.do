import { useState } from "react";
import { VStack } from "native-base";

import { Header } from "../components/Header";
import { ListItems } from "../components/ListItems";

export interface Items {
  id: string;
  title: string;
  checked: boolean;
}

export function Home() {
  const [items, setItems] = useState<Items[]>([]);

  return (
    <VStack flex={1} direction="column" bg="purple.500">
      <Header totalItems={items.length} />
      <ListItems items={items} setItems={setItems} />
    </VStack>
  );
}
