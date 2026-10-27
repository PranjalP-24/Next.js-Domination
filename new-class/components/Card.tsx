//to accept props firstly we have to make type
//type means --> jo bhi aap iss function ke andar except karne wale ho unn parameter ka kya type hone wala hai


//toh aap kon se props accept karne wale ho unn props ka type define kar diya hai
type CardProps = {
    title: string;       //jo card components ke jo props hone wale hai unn props ka type kya hai vo define kar diya hai
    description: string;
}

//Card ke andar 2 variable hai title and description 
export default function Card({title, description}: CardProps){  
    return(
        <div className="card p-4 rounded shadow-md w-fit bg-gray-800 m-3">
            <h1 className="text-xl font-bold mb-2 text-white">{title}</h1>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}