import { FC, useState } from 'react';
import { Header } from './components/Header/Header';
import { MainContent } from './pages/MainContent/MainContent';
import { DivApp, DivRoot } from './App.styles';
import { GlobalStyles } from './styles/global.styles';

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const toFirstPage = () => {
    setCurrentPage(1);
  };

  return (
    <DivApp>
      <GlobalStyles />
      <DivRoot>
        <Header toFirstPage={toFirstPage} />
        <MainContent
          currentPage={currentPage}
          ordersPerPage={ordersPerPage}
          setCurrentPage={setCurrentPage}
        />
      </DivRoot>
    </DivApp>
  );
};

export default App;
