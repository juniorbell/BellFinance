import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dataFilter';
import { Item } from '../../types/Item';
import * as C from './styles';



type Props = {
    onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if (isNaN(new Date(dateField).getTime())) {
            Swal.fire({
                icon: 'info',
                title: 'Data inválida.',
                text: 'Favor inserir uma data válida',
            })
        }
        if (!categoryKeys.includes(categoryField)) {
            Swal.fire({
                icon: 'info',
                title: 'Selecionar categória',
                text: 'Favor inserir uma categória válida',
            })
        }
        if (titleField === '') {
            Swal.fire({
                icon: 'info',
                title: 'Inserir descrição',
            })
        }
        if (valueField <= 0) {
            Swal.fire({
                icon: 'info',
                title: 'Formato de valor inválid0.',
                text: 'Favor inserir uma valor válido',
            })
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                date: newDateAdjusted(dateField),
                category: categoryField,
                title: titleField,
                value: valueField,
            });
            clearFields();

        }
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} placeholder='
                            Selecionar categoria' value={key}>{categories[key].title}</option>
                        ))}
                    </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input type="text" value={titleField} placeholder='Inserir descrição' onChange={e => setTitleField(e.target.value)} />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Valor R$
                </C.InputTitle>
                <C.Input type="number" value={valueField} prefix={'R$'} onChange={e => setValueField(parseFloat(e.target.value))} />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}><FontAwesomeIcon icon={faPlus} /></C.Button>
            </C.InputLabel>
        </C.Container>
    );
}