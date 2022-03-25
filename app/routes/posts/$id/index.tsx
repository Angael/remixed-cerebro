import { Link } from 'remix';
import { json, useLoaderData } from 'remix';

export const loader = async (req: any) => {
  const { params } = req;
  console.log({ req });
  const resp = await fetch(
    'https://jsonplaceholder.typicode.com/todos/' + params.id,
  ).then((response) => response.json());
  return json(resp);
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Posts() {
  const post: Todo = useLoaderData();
  console.log(post);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Posts</h1>
      <p>
        <Link to='/posts'>Go back</Link>
      </p>
      <div key={post.id}>{post.title}</div>
    </div>
  );
}
