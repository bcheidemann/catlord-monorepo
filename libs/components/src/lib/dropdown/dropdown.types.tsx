export interface DropdownElement<Data = never> {
    id: string | number,
    text: string,
    elements?: Array<DropdownElement<Data>>,
    data?: Data,
    onClick?: (element: DropdownElement<Data>) => void;
}
