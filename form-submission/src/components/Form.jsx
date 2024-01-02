import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

let count = 0
const Form = () => {
    const { register, control, handleSubmit } = useForm('')

    function form (data) {
        console.log(data.name, data.lastname, data)
        
    }
    count++
  return (
    <div>
        <form action="" onClick={handleSubmit(form)}>
            <h1>Form Submission{count / 2}</h1>

            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register('name')}/>
            <label htmlFor="lastname">Sobrenome</label>
            <input type="text" id="lastname" {...register('lastname')}/>

            <button type="submit">Submit</button>
            
        </form>

        <DevTool control={control} />
    </div>
  )
}

export default Form