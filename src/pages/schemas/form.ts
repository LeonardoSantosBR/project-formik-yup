import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const yupSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, { message: "Email inválido" })
    .email("Email obrigatório")
    .required("campo obrigatório"),
  nome: yup.string().max(30).required("campo obrigatório"),
  cpf: yup.string().max(11).required("campo obrigatório"),
  senha: yup.string().matches(senhaRegex, {
    message: "Mínimo de oito caracteres, pelo menos uma letra e um número",
  }),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha"), null], "Senhas devem ser iguais"),
});

export default yupSchema;
