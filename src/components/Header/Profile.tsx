import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Elian Becali</Text>
        <Text color="gray.300" fontSize="small">
          elianbecaliaguiar@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Elian Becali"
        src="https://github.com/elianbecali.png"
      />
    </Flex>
  );
}
