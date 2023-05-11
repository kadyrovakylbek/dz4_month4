import { useState } from 'react'
import './App.css'

function App()
{
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")
  const submit = (e) =>
  {

    e.preventDefault()
    if (number.length === 10) {
      console.log("Фио: ", name, "\nТелефон: ", number, "\nДата рождения: ", date)
      alert(`Фио: ${name} \nТелефон: ${number} \nДата рождения: ${date}`)
      setName("");
      setNumber("");
      setDate("");
    }
    else {
      alert('Проверьте заполнение формы')
    }
  }

  return (
    <div className="App">
      <h2>Регистрация</h2>
      <form onSubmit={submit} action="">
        <div>
          <label>ФИО:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required placeholder='ФИО' type="text" />
        </div>
        <div>
          <label>Номер телефона:</label>
          <input value={number} onChange={(e) => setNumber(e.target.value)} required placeholder='0777201598' type="number" />
        </div>
        {
          number.length === 10 ? <p>правильный номер</p> : <p>Заполните номер</p>
        }
        <div>
          <label>Дата рождения:</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} required type="date" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default App
