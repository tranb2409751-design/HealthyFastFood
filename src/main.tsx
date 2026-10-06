import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App Uncaught Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#dc2626', fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>⚠️ Ứng dụng đã gặp lỗi hiển thị</h2>
          <p style={{ color: '#4b5563', fontSize: 14, marginBottom: 16 }}>Vui lòng làm mới trang hoặc kiểm tra chi tiết lỗi bên dưới:</p>
          <pre style={{ background: '#f3f4f6', padding: 16, borderRadius: 8, overflowX: 'auto', fontSize: 12, color: '#1f2937' }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: 20, padding: '10px 20px', background: '#059669', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}
          >
            Tải lại trang (Reload)
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
