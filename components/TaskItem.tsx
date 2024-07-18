import React from "react";
import Link from "next/link";

import { TaskInterface } from "../interfaces";

type Props = {
  data: TaskInterface;
};

const ListItem = ({ data }: Props) => (
  <Link href="/task/[id]" as={`/task/${data.id}`}>
    {data.id}:{data.name}
  </Link>
);

export default ListItem;