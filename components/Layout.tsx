import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import PieChart from "./PieChart"

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/task">Task</Link> |{" "}
        <Link href="/tasks">Tasks List</Link> |{" "}
        <Link href="/login">Login</Link> |{" "}
        <Link href="/reset">Password Reset</Link> |{" "}
        <Link href="/new">New User</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <h3>Inspirational Quote of the Day</h3>
      <span>"Believe you can and you're halfway there." – Theodore Roosevelt</span>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}> */}
      {/* <img src="/images/wheel-of-life.png" alt="Wheel of Life" style={{ maxHeight: '400px'}} /> */}
      <PieChart />

    {/* </div> */}
    </footer>
  </div>
);

export default Layout;
