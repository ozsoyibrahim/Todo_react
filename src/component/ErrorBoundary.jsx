import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Hatanın nedenini yakalayın ve bileşenin state'inde güncelleyin
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata mesajını veya errorInfo'yu bir hata raporu API'sine gönderin
    console.log('Hata mesajı:', error);
    console.log('Hata bilgileri:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
