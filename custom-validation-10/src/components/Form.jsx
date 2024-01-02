import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
 

export default function Form () {
    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;

    function getForm (data) {
        console.log(data)
    }


    return (
      <>
        <form action="" onClick={handleSubmit(getForm)} noValidate>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            {...register("nome", {
              required: {
                value: true,
                message: "O nome é obrigatório",
              },
              minLength: {
                value: 3,
                message: "O nome precisa ter no minimo 3 caracteres",
              },
              validate: {
                // nomeInvalido: (fieldValue) => {
                //   return (
                //         fieldValue === "mario9" || "Nome invalido!"
                //     );
                // },
                inNum: (fieldValue) => {
                    
                    if(!isNaN(parseFloat(fieldValue)) && isFinite(fieldValue)) {
                        return "Acesso livre" // somente numeros
                    } else {
                        return "Acesso Negado";
                    }
                }
              },
            })}
          />
          <p className="errors">{errors.nome?.message}</p>
          <button>Submit</button>
        </form>

        <DevTool control={control} />
      </>
    );
}