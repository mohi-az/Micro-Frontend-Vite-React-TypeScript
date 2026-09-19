import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode; fallback: string };
type State = { failed: boolean; message: string };

export class RemoteErrorBoundary extends Component<Props, State> {
  state: State = { failed: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { failed: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Remote module failed to load', error, info);
  }

  render() {
    return this.state.failed
      ? <div role="alert" className="p-4 text-red-700">{this.props.fallback}<details><summary>Technical details</summary>{this.state.message}</details></div>
      : this.props.children;
  }
}
