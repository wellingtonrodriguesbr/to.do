import { Input as NativeBaseInput, IInputProps } from "native-base";
import { TextInput } from "react-native";

interface InputProps extends IInputProps {
  newTitleInputRef?: React.RefObject<TextInput>;
}

export function Input({ newTitleInputRef, ...rest }: InputProps) {
  return (
    <NativeBaseInput
      {...rest}
      ref={newTitleInputRef}
      bg="white"
      autoCorrect={false}
      px={5}
      py={4}
      fontSize="sm"
      borderColor="transparent"
      color="gray.600"
      placeholderTextColor="gray.400"
      _focus={{
        bg: "white",
        borderColor: "transparent",
      }}
    />
  );
}
