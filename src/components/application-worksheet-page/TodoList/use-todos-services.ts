import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { TodoFormFieldsT, TodoT } from "./types";
import { db } from "../../../../firebase/firebase-config";

const todosCollectionRef: CollectionReference<DocumentData> = collection(
  db,
  "todos"
);
import useToast from "@/lib/hooks/use-toast";

const useTodoServices = () => {
  const { addToast } = useToast();
  const createTodo = (newtodoData: TodoFormFieldsT) => {
    return addDoc(todosCollectionRef, newtodoData)
      .then(() => addToast("success", "Todo created successfully"))
      .catch(() => addToast("error", "Error creating todo"));
  };

  const updateTodo = (
    updatedTodoId: TodoT["id"],
    updatedTodoData: TodoFormFieldsT
  ) => {
    const todoDocRef = doc(db, "todos", updatedTodoId);
    return setDoc(todoDocRef, updatedTodoData, { merge: true })
      .then(() => addToast("success", "Todo updated successfully"))
      .catch(() => addToast("error", "Error updating todo"));
  };

  const updateCheckedTodo = (
    todoId: TodoT["id"],
    checked: TodoT["checked"]
  ) => {
    const todoDocRef = doc(db, "todos", todoId);
    const updatedField = { checked: !checked };
    return updateDoc(todoDocRef, updatedField)
      .then(() => addToast("success", "Todo status updated successfully"))
      .catch(() => addToast("error", "Error updating todo status"));
  };

  const deleteTodo = (todoId: string) => {
    const todoDoc = doc(db, "todos", todoId);

    return deleteDoc(todoDoc)
      .then(() => addToast("success", "Todo deleted successfully"))
      .catch(() => addToast("error", "Error deleting todo"));
  };

  return { createTodo, updateTodo, updateCheckedTodo, deleteTodo };
};

export default useTodoServices;
