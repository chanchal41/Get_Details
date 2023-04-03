
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
  const [input, setInput] = useState([])

  const submitHandle = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setInput(resp)
      })
    })

  }
  console.warn(input)

  return (
    <div>
      <Table className='mt-4' striped bordered hover size='sm'>
        <thead class="table-dark" >
          <tr >
            <th >ID</th>
            <th >Body</th>
            <th >Title</th>
          </tr>
        </thead>

        <tbody class="table-group-divider">
          {input.map((item, i) =>
            <tr k={i}>
              <td>{item.id}</td>
              <td>{item.body}</td>
              <td>{item.title}</td>
            </tr>
          )}

          <Button onClick={submitHandle} style={{ marginTop:100 }}>Click here</Button>
        </tbody>
      </Table>
    </div>
  );
}

export default TodoList;