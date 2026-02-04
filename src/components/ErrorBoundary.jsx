import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-[99999] bg-red-50 p-10 flex flex-col items-center justify-center text-red-900 overflow-auto">
                    <h1 className="text-4xl font-bold mb-4">Algo salió mal 😔</h1>
                    <p className="text-xl mb-8">Por favor, recarga la página o contacta al soporte.</p>

                    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl border border-red-200">
                        <h2 className="font-bold text-lg mb-2 border-b border-red-100 pb-2">Detalle del Error:</h2>
                        <pre className="whitespace-pre-wrap font-mono text-sm text-red-700 bg-red-50 p-4 rounded-lg overflow-x-auto">
                            {this.state.error && this.state.error.toString()}
                        </pre>
                        <h2 className="font-bold text-lg mt-4 mb-2 border-b border-red-100 pb-2">Component Stack:</h2>
                        <pre className="whitespace-pre-wrap font-mono text-xs text-gray-500 max-h-40 overflow-y-auto">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
                    >
                        Recargar Página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
