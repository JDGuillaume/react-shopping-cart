import ReactDOM from 'react-dom/client';
import App from './App';

const root: HTMLElement | null = document.getElementById('root');

if (root !== null){
    ReactDOM.createRoot(root).render(<App />);
}


