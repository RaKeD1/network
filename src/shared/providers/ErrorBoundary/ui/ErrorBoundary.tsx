import { ErrorInfo, ReactNode, Component } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

interface ErrorBoundaryProps {
    children:ReactNode;
    itemError:ReactNode;
}
interface ErrorBoundaryState {
    hasError:boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState > {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children, itemError } = this.props;

        if (hasError) {
            return itemError;
        }

        return children;
    }
}
export default ErrorBoundary;
