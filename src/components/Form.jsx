import FormField from "./FormField"

export function Form({onsub,register,handleSubmit,errors}){
  return (
      <form onSubmit={handleSubmit(onsub)} className="text-center px-2 py-3">
        <p className="ml-2 font-bold">Personal details</p>
        <div className="text-black grid grid-cols-2">
          <FormField register={register} placeholder={'name'} error={errors.name} name='name'/>
          <FormField register={register} placeholder={'username'} error={errors.username} name='username'/>
        </div>
        <div className="text-black grid grid-cols-2">
          <FormField register={register} placeholder={'Phone no'} error={errors.phone} name='phone'/>
          <FormField register={register} placeholder={'email'} error={errors.email} name='email'/>
        </div>
        <p className="ml-2 font-bold">address</p>
        <div className="text-black grid grid-cols-2">
          <FormField register={register} placeholder={'street'} error={errors.address?.street} name='address.street'/>
          <FormField register={register} placeholder={'suite'} error={errors.address?.suite} name='address.suite'/>
        </div>
        <div className="text-black grid grid-cols-2">
          <FormField register={register} placeholder={'city'} error={errors.address?.city} name='address.city'/>
          <FormField register={register} placeholder={'zipcode'} error={errors.address?.zipcode} name='address.zipcode'/>
        </div>
        <p className="ml-2 font-bold">Bussiness Info</p>
        <div className="text-black grid grid-cols-2">
          <FormField register={register} placeholder={'company name'} error={errors.company?.name} name='company.name'/>
          <FormField register={register} placeholder={'website'} error={errors.website} name='website'/>
        </div>
        <div className="text-black grid grid-cols-1" >
          <FormField register={register} placeholder={'Work desciption'} error={errors.company?.bs} name='company.bs'/>
        </div>
        <button className="bg-primary px-3 py-2 rounded mt-2" type="submit">Submit</button>
      </form>
  )
}
