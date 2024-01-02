import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


const Form = () => {

    const { register, control } = useForm()


  return (
    <div>
        <h1>Form</h1>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register('username')} />
            
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" {...register('email')}/>

            <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default Form