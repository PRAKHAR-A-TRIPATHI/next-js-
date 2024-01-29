"use client"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchData } from "./redux/slice";


export default function Home() {
  const data = useAppSelector((state: any) => state.data)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, []);
  return (
    <>
      <div>
        <div className='p-2 m-2 flex justify-center items-center'>
          <ul>
            {
              data?.map((value: any) => (
                <li key={value.id} className='text-white text-xl text-bold m-2 w-100vw flex justify-between'>
                  <div>
                    {value.name}
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
