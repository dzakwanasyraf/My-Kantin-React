import React from 'react';
import axios from 'axios';
import Bintang from '../../images/content/Vector (2).png'
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert';


function Populer(params) {
        const [populer, setPopuler] = React.useState([]); 
        const getPopuler = async() => {
          try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
            const response = await axios.get(url);
            console.log(response.data.data);
            setPopuler(response.data.data);
          } catch (error) {
            console.log(error)
          }
        };
    
        React.useEffect(()=>{
          getPopuler();
        });
        
      

    return(
        <React.Fragment>
            <h1 className="font-bold mt-20 text-2xl">Populer</h1>
            <div className="mt-10">
          <ul className="flex items-center justify-between w-full overflow-y-auto ">
            {populer.map((dt, index) => (
                <li key={index} className={`flex-none w-1/4  h-18 relative m-10 `}>
                <img onClick="" className="rounded-xl w-full h-32 " src={dt.image} alt={dt.image} />
                <p style={{background:'rgba(248, 248, 255, 0.75)'}} className="absolute z-10 rounded-3xl flex items-center justify-center  bottom-20 left-2 right-15 text-black font-black h-10 p-1">
                     {dt.waktu}
                  </p>
                <div className=" font-extrabold font-serif">{dt.name}</div>
                <div className="flex">
                    <img src={Bintang} alt=""/>
                    <div>{dt.rating}</div>
                    <div className="ml-12">Rp. {dt.harga}</div>
                </div>
                <NavLink to={`/populer/${dt.id}`}>
                  
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        </React.Fragment>
    )
}
export default Populer;