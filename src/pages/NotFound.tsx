import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-2xl font-bold text-heading">404</h1>
      <p className="mt-2 text-content-muted">Página não encontrada.</p>
      <Link
        to="/"
        className="mt-4 inline-block text-primary underline dark:text-accent"
      >
        Voltar para a home
      </Link>
    </div>
  );
}
