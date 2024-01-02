import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = () => {
  const { register, control, formState, handleSubmit } = useForm({
    defaultValues: {
      name: " ",
      social: {
        face: 'facebook',
        insta: 'instagram'
      }
    },
  });
  const { errors } = formState;

  function myForm(data) {
    console.log(data);
  }

  return (
    <div>
      <h2>Form</h2>
      <form action="" onClick={handleSubmit(myForm)} noValidate>
        <label htmlFor="name">Nome</label>
        <br />
        <input
          type="text"
          id="name"
          {...register("name", {
            minLength: {
              value: 3,
              message: "Precisa ter no minimo 3 caracteres",
            },
          })}
        />
        <p className="errors">{errors.name?.message}</p>

        <label htmlFor="face">Face</label>
        <br />
        <input
          type="text"
          id="face"
          {...register("social.face", {
            minLength: {
              value: 3,
              message: "Precisa ter no minimo 3 caracteres",
            },
          })}
        />
        <p className="errors">{errors.social?.message}</p>
        <button>Submit</button>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default Form;
