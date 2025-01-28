import { useEffect, useState } from "react";


const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((res) => setData(res));
    })
    return (
        <div className="border text-3xl mt-5 rounded-2xl shadow-lg text-center">
            {data.map((item,index)=>
            <div key={index} className="border rounded-lg shadow-lg p-4 m-4">
                <h1>{item.name}</h1>
                <h1>{item.email}</h1>
            </div>
            )}
        </div>
    );
};

export default FetchData;