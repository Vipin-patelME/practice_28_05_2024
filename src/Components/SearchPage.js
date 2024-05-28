import { useState } from "react"


const SearchPage = ()=>{
    const tasks = [
        "playing Cricket",
        "Reading Books",
        "Listening To Songs",
        "Dancing",
        "Playing Guitar",
        "Runnning"
    ]
    const [newTasks, setNewTasks] = useState(tasks)

    const onUserInput = (e)=>{
        const userInput = e.target.value
        //console.log(userInput)
        const filteredUser = tasks.filter((item)=>item.toUpperCase().includes(userInput.toUpperCase()))
        // const filteredUser1 = tasks.filter(eachSuggestion =>eachSuggestion.toLowerCase().includes(userInput.toLowerCase()))
        // console.log(filteredUser)
        // console.log(filteredUser1)
        setNewTasks(filteredUser)
    }

    return(
        <div>
            <input onChange={onUserInput} type="search"/>
            <ul style={{listStyle:"none"}}>
                {
                    newTasks.map((item)=><li>{item}</li>)
                }
            </ul>
        </div>
    )
}
export default SearchPage