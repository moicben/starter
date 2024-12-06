export default function Header({ title }) {
  return (
    <header className="header">
      <a href="/"><img className="logo" src="https://universdulapin.fr/wp-content/uploads/2022/02/cropped-Univers-du-Lapin-1-391x162.png" alt="Univers du Lapin" /></a>
      <h1 className="title">{title}</h1>
    </header>
  );
}