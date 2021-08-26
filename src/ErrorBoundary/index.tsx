import React, {ErrorInfo} from 'react';

type State = {
  hasError: boolean
}


export class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    console.log('trying to set hasError to true',);
    return {hasError: true};
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

