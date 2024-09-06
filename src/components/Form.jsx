export function Form({onsub,register,handleSubmit}){

  return (
      <form onSubmit={handleSubmit(onsub)} className="text-center px-2 py-3">
        <p className="ml-2 font-bold">Personal details</p>
        <div className="text-black">
          <input className="m-2 px-2 py-1 rounded" {...register('name')} placeholder="name"></input>
          <input className="m-2 px-2 py-1 rounded"  {...register('username')} placeholder="username"></input>
        </div>
        <div className="text-black">
          <input className="m-2 px-2 py-1 rounded" {...register('phone')}  placeholder="phone no"></input>
          <input className="m-2 px-2 py-1 rounded" type="email" {...register('email')} placeholder="email"></input>
        </div>
        <p className="ml-2 font-bold">address</p>
        <div className="text-black">
          <input className="m-2 px-2 py-1 rounded" {...register('address.street')} placeholder="street"></input>
          <input className="m-2 px-2 py-1 rounded" {...register('address.suite')} placeholder="suite"></input>
        </div>
        <div className="text-black">
            <input className="m-2 px-2 py-1 rounded" {...register('address.city')} placeholder="city"></input>
            <input className="m-2 px-2 py-1 rounded" {...register('address.zipcode')}placeholder="zipcode"></input>
        </div>
        <p className="ml-2 font-bold">Bussiness Info</p>
        <div className="text-black">
          <input className="m-2 px-2 py-1 rounded" {...register('company.name')} placeholder="company name"></input>
          <input {...register('website')} className="m-2 px-2 py-1 rounded" placeholder="website"></input>
        </div>
        <div className="text-black" >
          <input {...register('company.bs')} className="m-2 px-2 w-[calc(100%-1rem)] box-border py-1 rounded" placeholder="work desciption"></input>
        </div>
        <button className="bg-primary px-3 py-2 rounded mt-2" type="submit">Submit</button>
      </form>
  )
}
