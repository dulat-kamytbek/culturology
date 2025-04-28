import { useParams, Link } from "react-router-dom";
import tribesData from "../data/tribes.json";

function TribeDetail() {
  const { tribeId } = useParams();
  const tribe = tribesData[tribeId];

  if (!tribe) {
    return <div className="p-6">Народ не найден.</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <Link to="/tribes" className="text-blue-600 hover:underline">
        ← Назад к списку народов
      </Link>

      <h1 className="text-4xl font-bold">{tribe.name} ({tribe.local_name})</h1>

      <section className="space-y-4">
        <InfoBlock title="Регион" content={tribe.region.join(", ")} />
        <InfoBlock title="Язык" content={`Основной язык: ${tribe.language.primary_language}, Письменность: ${tribe.language.writing_system}`} />
        <InfoBlock title="Вероисповедание" content={`Религия: ${tribe.beliefs.religion}. Ключевые практики: ${tribe.beliefs.key_practices.join(", ")}`} />
        <ImageBlock title="Одежда" description={tribe.clothing.description} imgUrl={tribe.clothing.image_url} />
        <ImageBlock title="Кухня" description={`Блюда: ${tribe.food.representative_dishes.join(", ")}`} imgUrl={tribe.food.image_url} />
        <ImageBlock title="Архитектура и искусство" description={tribe.architecture_and_art.description} imgUrl={tribe.architecture_and_art.image_url} />
        <HolidayBlock holidays={tribe.important_holidays} />
        <ImageBlock title="Обычаи" description={`Приветствие: ${tribe.social_customs.greeting}. Свадебные обычаи: ${tribe.social_customs.marriage_customs}`} imgUrl={tribe.social_customs.image_url} />
      </section>
    </div>
  );
}

// Вспомогательные компоненты:
function InfoBlock({ title, content }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function ImageBlock({ title, description, imgUrl }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt={title} className="w-full h-auto rounded-lg" />
    </div>
  );
}

function HolidayBlock({ holidays }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Праздники</h2>
      <ul>
        {holidays.map((holiday, index) => (
          <li key={index}>
            <strong>{holiday.holiday_name}</strong>: {holiday.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TribeDetail;
