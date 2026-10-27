import FilterUsers from "@/components/FilterUsers";


export default async function Classroom() {

  const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
  const users = await response.json();



  return (
    <main>
      <h1>Welcome to the Classroom</h1>
      <p>This is the classroom page.</p>

      <FilterUsers users={users}/>
      
    </main>
  );
}                        