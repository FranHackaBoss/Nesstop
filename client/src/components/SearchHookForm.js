import { useForm } from "react-hook-form";
import "../css/SearchHookForm.css";

export default function SearchHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form id="search" onSubmit={handleSubmit(onSubmit)}>
      <input
        id="inputsearch"
        ref={register}
        placeholder="Nombre o ciudad de la empresa"
        name="companyname"
      />

      <input id="submitsearch" type="submit" value="Buscar" />
    </form>
  );
}
