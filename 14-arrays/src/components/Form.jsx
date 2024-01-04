import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Form = () => {
    const { register, control, formState, handleSubmit } = useForm({
        defaultValues: {
            nome: 'joao',
        },
        phone: ["", ""]
    })
    const { errors } = formState

    function myForm (data) {
        console.log(data)
    }

  return (
    <div>
        <h2>Form Arrays</h2>
        <form onClick={handleSubmit(myForm)}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id='nome' {...register('nome', {minLength: {
                value: 3,
                message: 'minimo de 3 caracteres'
            }})}/>
            <p>{errors.nome?.message}</p>

            <label htmlFor="phone-one">Phone One</label>
            <input type="text" id='phone-one' {...register('phone.0', {minLength: {
                value: 9,
                message: 'minimo de 9 caracteres'
            }})}/>
            <p>{errors.phone?.message}</p>

            <label htmlFor="phone-two">Phone Two</label>
            <input type="text" id='phone-two' {...register('phone.1', {minLength: {
                value: 9,
                message: 'minimo de 5 caracteres'
            }})}/>
            <p>{errors.phone?.message}</p>
            <button>Submit</button>
        </form>
        <DevTool control={control}/>

    </div>
  )
}

export default Form