import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

const Form = () => {
    const { register, control, handleSubmit } = useForm()

    function getForm (data) {
        console.log(data)
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(getForm)} noValidate>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" {...register('nome', {
                required: 'Nome é obrigatorio'
            }) }/>

            <button type='submit'>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default Form