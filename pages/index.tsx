import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Task Management👋</h1>
    <p>
      <Link href="/about">New Task</Link>
    </p>
    <p>
      <Link href="/tasks">View Tasks</Link>
    </p>
  </Layout>
);

export default IndexPage;
