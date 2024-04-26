import { getMarkup } from "@/libs/utils";

export default function Home() {
  const hero = getMarkup("src/content/homepage", "hero.md");

  if (!hero) {
    return null;
  }

  const { data } = hero;

  return (
    <main>
      <div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <button type="button">{data.buttonText}</button>
      </div>
    </main>
  );
}
