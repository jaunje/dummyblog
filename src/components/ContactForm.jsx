// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // sacamos la info en consola
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-slate-100 p-4"
    >
      <div className="mb-4">
        <label className="block mb-1" htmlFor="name">
          Nombre
        </label>
        <input
          {...register("name", { required: true })}
          id="name"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.name && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          Correo electrónico
        </label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          id="email"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && (
          <span className="text-red-500">
            Por favor ingresa un correo electrónico válido
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="message">
          Mensaje
        </label>
        <textarea
          {...register("message", { required: true })}
          id="message"
          className="w-full px-3 py-2 border rounded-md"
        ></textarea>
        {errors.message && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
