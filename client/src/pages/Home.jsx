import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Добро пожаловать в мир культур!</h1>
      <Link 
        to="/tribes" 
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Перейти к народам
      </Link>
    </div>
  );
}

  