import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

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
      <img src="images\wheel-of-life.png"></img>
      <span>"Believe you can and you're halfway there." – Theodore Roosevelt</span>
    </footer>
  </div>
);

export default Layout;
