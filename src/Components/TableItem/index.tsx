import * as C from './style';
import { Itens } from '../../Types/Itens';

type Props = {
    item: Itens
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>

            <C.TableColumn>...</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value}</C.TableColumn>

        </C.TableLine>
    );
}