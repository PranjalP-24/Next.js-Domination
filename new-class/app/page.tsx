import Card from "@/components/Card";
import {someAction} from "@/app/actions/something"



export default function Home() {
  return (
    <>
    <h1>Hello Friends</h1>
    <button className="bg-blue-500 text-white px-4 py-2 rounded"
    onClick={someAction}>Click me</button>
    </>
  );
}