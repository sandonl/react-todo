import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);

  console.log(todoDetails);
  const { id: todoId, userId, title, completed } = todoDetails || {};

  return (
    <div>
      {todoDetails ? (
        <div>
          <h1> {`Todo id: ${todoId}`}</h1>
          <h2> {`User id: ${userId}`}</h2>
          <h3> {`Title: ${title}`}</h3>
          <h4> {`Completed: ${completed}`}</h4>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
