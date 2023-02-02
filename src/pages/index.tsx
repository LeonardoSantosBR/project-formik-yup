import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import { useFormik } from 'formik';
import { DiReact } from "react-icons/di"
import { AiFillWarning } from "react-icons/ai"
import yupSchema from "./schemas/form";


export default function Home() {

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched }
    = useFormik({
      initialValues: {
        email: "",
        nome: "",
        cpf: "",
        senha: "",
        confirmarSenha: ""
      },
      validationSchema: yupSchema,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
      }
    })

  function enviarBack(values: any) {
    console.log(values)
  }

  return (
    <Flex
      justifyContent={'center'}
      alignItems={"center"}
      position={'fixed'}
      top={"0"}
      left={"0"}
      w={"100%"}
      h={"100%"}
      bg={"#211C21"}>

      <Box
        w={'420px'}
        h={"65%"}
        bg={"white"}
        p={"20px"}
        position={"relative"}
        borderRadius={"10px"}>
        <Box
          display={'flex'}
          justifyContent={"center"}
          alignItems={"center"}
          width={'100%'}
          height={"20%"}>
          <DiReact size={60} color="#3163FA" />
        </Box>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Text
            fontWeight={"medium"}
            ml={"11px"}
          >
            Email
          </Text>
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            variant='filled'
            placeholder=''
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {
            errors.email && touched.email &&
            <Flex>
              <Text fontSize={'10px'} mr={"3px"} fontWeight={"bold"} color={"red"} ml={'7px'}>{errors.email}</Text>
              <AiFillWarning size={'14px'} color={"red"} />
            </Flex>
          }
          <Text
            fontWeight={"medium"}
            ml={"11px"}
            mt={"10px"}
          >
            Nome
          </Text>
          <Input
            name="nome"
            value={values.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            variant='filled'
            width={'95%'}
            placeholder=''
            className={errors.nome && touched.nome ? "input-error" : ""}
          />
          {
            errors.nome && touched.nome &&
            <Flex>
              <Text fontSize={'10px'} mr={"3px"} fontWeight={"bold"} color={"red"} ml={'7px'}>{errors.nome}</Text>
              <AiFillWarning size={'14px'} color={"red"} />
            </Flex>
          }
          <Text
            fontWeight={"medium"}
            ml={"11px"}
            mt={"10px"}
          >
            cpf
          </Text>
          <Input
            name="cpf"
            value={values.cpf}
            onChange={handleChange}
            onBlur={handleBlur}
            variant='filled'
            w={'40%'}
            placeholder='___.___.___.__'
            className={errors.cpf && touched.cpf ? "input-error" : ""}
          />
          {
            errors.cpf && touched.cpf &&
            <Flex>
              <Text fontSize={'10px'} mr={"3px"} fontWeight={"bold"} color={"red"} ml={'7px'}>{errors.cpf}</Text>
              <AiFillWarning size={'14px'} color={"red"} />
            </Flex>
          }
          <Input
            name="senha"
            value={values.senha}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'password'}
            w={'70%'}
            mt={"10px"}
            placeholder='Digite sua senha'
            className={errors.senha && touched.senha ? "input-error" : ""}
          />
          {
            errors.senha && touched.senha &&
            <Flex>
              <Text fontSize={'10px'} mr={"3px"} fontWeight={"bold"} color={"red"} ml={'7px'}>{errors.senha}</Text>
              <AiFillWarning size={'14px'} color={"red"} />
            </Flex>
          }
          <Input
            name="confirmarSenha"
            value={values.confirmarSenha}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'password'}
            w={'80%'}
            mt={'10px'}
            placeholder='Confirme sua senha'
            className={errors.confirmarSenha && touched.confirmarSenha ? "input-error" : ""}
          />
          {
            errors.confirmarSenha && touched.confirmarSenha &&
            <Flex>
              <Text fontSize={'10px'} mr={"3px"} fontWeight={"bold"} color={"red"} ml={'7px'}>{errors.confirmarSenha}</Text>
              <AiFillWarning size={'14px'} color={"red"} />
            </Flex>
          }
        </form>
        <Box
          display={'flex'}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={enviarBack}
          width={'100%'}
          height={"20%"}>
          <Button
            colorScheme='blue'
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}
