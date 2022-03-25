import { Link } from 'remix';
import { json, useLoaderData } from 'remix';
import {
  Text,
  Paper,
  Box,
  Container,
  List,
  Title,
  SimpleGrid,
  Card,
  Button,
} from '@mantine/core';

export const loader = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos').then(
    (response) => response.json(),
  );
  return json(resp);
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Posts() {
  const posts: Todo[] = useLoaderData();

  return (
    <Container>
      <Title mb='lg'>Posts</Title>
      <SimpleGrid cols={3}>
        {posts.map((p) => (
          <Card shadow='sm' p='lg'>
            <Text>{p.title}</Text>
            <Button
              variant='light'
              component={Link}
              to={'/posts/' + p.id}
              fullWidth
              style={{ marginTop: 14 }}
            >
              See Post
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
