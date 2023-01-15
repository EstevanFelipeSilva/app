/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import * as C from './App.style';
import { Itens } from './Types/Itens';
import { Category } from './Types/Category';
import { Item } from './Data/Item';
import { Categories } from './Data/Categories';
import { getCurrentMonth, filterListByMonth } from './Helpers/dateFilter';



function App() {

  const [list, setList] = useState(Item);
  const [filteredList, setFilteredList] = useState<Itens[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth]);

  return (
    <C.Container>

      <C.Header>

        <C.HeaderText>Sistema Financeiro</C.HeaderText>

      </C.Header>

      <C.Body>

        {/* Área de Informações */}

        {/* Área de Inserção */}

        {/* Tabela de Itens */}

      </C.Body>

    </C.Container>
  );
}

export default App;