import { GetStaticProps } from "next";
import Link from "next/link";

import { TaskInterface } from "../interfaces";
import { sampleTaskData } from "../utils/task-mock-data";
import Layout from "../components/Layout";
import Task from "../components/List";

type Props = {
    items: TaskInterface[];
  };

const Tasks = ({ items }: Props) => {
    return (
    <Layout title="Tasks List">
      <div>
        <h2>View Tasks</h2>
        <p>You are currently on: /tasks</p>
        <Task items={items} />
        <p>
        <Link href="/">Go home</Link>
    </p>
    </div>
    </Layout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: TaskInterface[] = sampleTaskData;
    console.log("hello")
    return { props: { items } };
  };


export default Tasks;

