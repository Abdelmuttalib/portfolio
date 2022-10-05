import {
  collection,
  CollectionReference,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { TodoT } from "./types";
import { db } from "../../../../firebase/firebase-config";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoT[]>([]);
  const todosCollectionRef: CollectionReference<DocumentData> = collection(
    db,
    "todos"
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = () => {
      if (!isLoading) setIsLoading(true);
      onSnapshot(todosCollectionRef, (snapShot) => {
        const todos: TodoT[] = snapShot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as TodoT)
        );

        setTodos(todos);
        setIsLoading(false);
      });
    };

    unsubscribe();

    return unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { todos, isLoading };
};

export default useTodos;
