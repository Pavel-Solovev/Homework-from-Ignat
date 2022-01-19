import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPress: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onKeyPress, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={inputClass}>{error}</div>
        </div>
    )
}

export default Greeting
