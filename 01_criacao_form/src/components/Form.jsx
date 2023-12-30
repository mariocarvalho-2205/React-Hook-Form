import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const validacaoSchema = Yup.object().shape({
  senha: Yup.string().required("Campo Obrigatório"),
  confirmacao_senha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas precisam ser iguais")
    .required("Confirmação Obrigatória"),
});

const asyncFunction = async () => {
    const myPromisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello')
        }, 3000)
    })
    return myPromisse
}

// Form Conponent
const Form = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(validacaoSchema),
    defaultValues: {
      senha: "",
      confirmacao_senha: "",
    },
  });

  const [output, setOutput] = useState("");

  const { errors, isSubmitting } = formState;

  console.log(`Errors`, errors);
  console.log(`IsSubmitting`, isSubmitting);

  const validacaoSenha = async (data) => {
    setOutput(JSON.stringify(data, null, 2));
    await asyncFunction()
    reset();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(validacaoSenha)}>
        <h1>Validação de Senha</h1>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          {...register("senha")}
        />
        {errors.senha && <p>{errors.senha.message}</p>}

        <label htmlFor="confirmacao_senha">Confirmação de Senha</label>
        <input
          type="password"
          name="confirmacao_senha"
          placeholder="Confirmação de Senha"
          {...register("confirmacao_senha")}
        />
        {errors.confirmacao_senha && <p>{errors.confirmacao_senha.message}</p>}
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando" : "Enviar"}</button>
      </form>
      <pre>
        Submit: <br />
        {output}
      </pre>
    </div>
  );
};

export default Form;
