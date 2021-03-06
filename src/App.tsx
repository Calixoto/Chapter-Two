import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from './TransactionsContext';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}