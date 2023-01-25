import * as C from './style';
import { Itens } from '../../Types/Itens';
import { formatDate } from '../../Helpers/dateFilter';
import { Categories } from '../../Data/Categories'

type Props = {
    item: Itens
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>

            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>

                <C.Category color={Categories[item.category].color}>

                    {Categories[item.category].title}

                </C.Category>

            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                
                <C.Valeu color={Categories[item.category].expense ? 'red' : 'green'}>

                    R$ {item.value}

                </C.Valeu>
                
            </C.TableColumn>

        </C.TableLine>
    );
}