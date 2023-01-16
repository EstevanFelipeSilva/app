/* eslint-disable @typescript-eslint/no-unused-vars */
import * as C from './style';
import { Itens } from '../../Types/Itens';
import { TableItem } from '../TableItem';

type Props = {
    list: Itens[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>

            <thead>

                <tr>
                    
                    <C.TableHeadColumn>Data</C.TableHeadColumn>
                    <C.TableHeadColumn>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn>Valor</C.TableHeadColumn>

                </tr>

            </thead>

            <tbody>

                { list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}

            </tbody>

        </C.Table>
    );
}