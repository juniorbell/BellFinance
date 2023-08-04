import { format } from 'date-fns';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy');

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={140}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor </C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{formattedDate}</td>
                        <td>{item.category}</td>
                        <td>{item.title}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </C.Table>
    );
}