import './styles.css';
import Accordion from './components/Accordion';
import faqs from '../public/data';

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
