import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
// import { useState } from 'react';

let renderCount = 0
const Form = () => {

    const { register, control, handleSubmit, formState } = useForm()
    const { errors } = formState;
    // const [ nome, setNome ] = useState('');
    
    function formControl ( data ) {
        console.log(data)
        // setNome(data.nome)
    }

    renderCount++
    return (
      <>
          <h3>Reder form {renderCount / 2}</h3>
        <form action="" onClick={handleSubmit(formControl)} noValidate>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            {...register("nome", {
              required: {
                value: true,
                message: "O nome é obrigatório",
              },
            })}
          />
          {<p className="error">{errors.nome?.message}</p>}
          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            type="text"
            id="sobrenome"
            {...register("sobrenome", { required: "Sobrenome Obrigatório", minLength: {
                value: 3,
                message: 'minimo de 3 caracteres'
            } })}
          />
          <p className="error">{errors.sobrenome?.message}</p>
          <button type="submit">Submit</button>
        </form>
        {/* <p>{nome}</p> */}
        <DevTool control={control} />
      </>
    );
}

export default Form