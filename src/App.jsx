import { useState } from "react"

function App() {
  // const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "comida",
      completed: false
    },
    {
      id: "2",
      title: "futbol",
      completed: true
    },
    {
      id: "3",
      title: "estudiar",
      completed: false
    }
  ])

  const handleChange = (event) => {
    // console.log('estoy escribiendo')
    // console.log(event.target.value)
    const value = event.target.value
    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Agregando tarea!!!')

    // setLoading(true)

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    console.log(newTodo)

    setTasks([...tasks, newTodo])

    setInput('')

    // setTimeout(() => {
    //   setLoading(false)
    // }, 2000)
  }

  const handleRemoveTask = (id) => {
    console.log('eliminando tarea', id)

    const newTasks = tasks.filter(task => task.id !== id)

    console.log(newTasks)

    setTasks(newTasks)

    // ['😜','😍','🤩'].filter(emoti => emoti !== '😍')
  }

  return (
    <>
      <main>
        <h1>TODO APP</h1>

        {/* {input} */}

        {/* {JSON.stringify(tasks)} */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="¿Qué deseas hacer hoy?"
            required
            value={input}
            onChange={handleChange}
          />
          {/* <input type="submit" value={loading ? 'Agregando' : 'ADD'} /> */}
          <input type="submit" value="ADD" />
        </form>

        <section>
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked
                  />
                  <span
                    style={{
                      color: 'red',
                      textDecoration: task.completed ? 'line-through' : 'none'
                    }}
                  >
                    {task.title}
                  </span>
                  <button onClick={() => handleRemoveTask(task.id)}>❌</button>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
