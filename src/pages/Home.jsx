import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center">
      <div>
        <p className="text-3xl">JsonPlaceHolder Fake Api Table</p>
      </div>
      <Link to='/users' className="bg-primary px-3 py-2 rounded mt-4 font-bold">Go to Data Table</Link>
    </div>
  )
  
}
export default Home;
