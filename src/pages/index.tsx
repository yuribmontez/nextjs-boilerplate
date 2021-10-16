import { Flex, Heading } from '@chakra-ui/react';
import { Layout } from 'components/Core';

export default function Home() {
  return (
    <Layout title="Home">
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Heading>Hello World</Heading>
      </Flex>
    </Layout>
  );
}
