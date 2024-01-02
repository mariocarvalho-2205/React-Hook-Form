import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

let endercount = 0

const Form = () => {
    const { register, control } = useForm()

    endercount++
  return (
    <div>
        <form action="">
            <h1>Form {endercount / 2}</h1>
            <label htmlFor="name">Nome</label>
            <input type="text" id='name' {...register('name')}/>

            <label htmlFor="email">Email</label>
            <input type="text" id='email' {...register('email')}/>

            <button type="submit">Enviar</button>
        </form>

        <DevTool control={control}/>
    </div>
  )
}

export default Form