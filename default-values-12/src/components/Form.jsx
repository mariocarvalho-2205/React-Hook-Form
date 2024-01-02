import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export default function From () {

    const { register, control, handleSubmit, formState } = useForm(
         {
    //   // chamando dados da api:
    //   defaultValues: async () => {
    //     const response = await fetch('url');
    //     const data = await response.json()
    //     return {
    //         name: 'batman',
    //         lastname: data.lastname,
    //     }
    //   }


      defaultValues: {
          name: 'jojo',
          lastname: 'tsts'
      }
    });
    
    const { errors } = formState;

    function myForm( data ) {
        console.log(data)
    }


    return (
      <>
        <h2>Formulario</h2>
        <form action="" onClick={handleSubmit(myForm)} noValidate>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "O nome é Obrigatório",
              },
            })}
          />
          <p>{errors.name?.message}</p>

          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", {
              required: {
                value: true,
                message: "O Sobrenome é Obrigatório",
              },

            })}
          />
          <p>{errors.lastname?.message}</p>

          <button type="submit">Submit</button>
        </form>

        <DevTool control={control} />
      </>
    );
}