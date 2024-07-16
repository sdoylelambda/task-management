import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../interfaces";
import { sampleUserData } from "../utils/sample-data";
import Layout from "../components/Layout";
import List from "../components/List";

type Props = {
    items: User[];
  };

const Tasks = ({ items }: Props) => {
    return (
    <Layout title="Users List | Next.js + TypeScript Example">
        <h2>View Tasks</h2>
        <p>You are currently on: /users</p>
        <List items={items} />
        <p>
        <Link href="/">Go home</Link>
    </p>
    </Layout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: User[] = sampleUserData;
    console.log("hello")
    return { props: { items } };
  };


export default Tasks;

