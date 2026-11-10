import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : 'Une erreur inattendue est survenue.'
    };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error('NOX HAVEN — erreur d’interface capturée', error, info.componentStack);
  }

  private retry = () => this.setState({ hasError: false, message: '' });

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <main className="app-error-screen" role="alert" aria-live="assertive">
        <div className="app-error-card">
          <span className="eyebrow">PROTECTION DE TON ESPACE</span>
          <h1>Cette page a rencontré un problème.</h1>
          <p>Une partie de l’interface n’a pas pu s’afficher. Tes données enregistrées ne sont pas supprimées par cet écran.</p>
          <p className="app-error-detail">{this.state.message}</p>
          <div className="app-error-actions">
            <button type="button" className="primary-btn" onClick={this.retry}>Réessayer l’affichage</button>
            <button type="button" className="secondary-btn" onClick={() => window.location.reload()}>Recharger NOX HAVEN</button>
          </div>
        </div>
      </main>
    );
  }
}
