export type TodoT = {
  id: string;
  title: string;
  day: string;
  checked: boolean;
};

export type TodoFormFieldsT = {
  title: TodoT["title"];
  day: TodoT["day"];
  checked: TodoT["checked"];
};
