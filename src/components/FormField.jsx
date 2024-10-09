const FormField = ({
  register,
  error,
  placeholder,
  name
}) => {
  return (
    <div className="m-2">
        <input className="w-full m-2 px-2 py-1 rounded" {...register(name)} placeholder={placeholder}></input>
      {
        error && <p className="text-red-800">{error.message}</p>
      }
    </div>
  )
}

export default FormField
