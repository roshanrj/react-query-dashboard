type columnType = {
    label: string,
    key: string,
    type: 'TEXT' | 'NUMBER' | 'IMAGE'
}

export type tableProps = {
    columns: Array<columnType>, 
    data: Array<Object>, 
    handleRowClick: (data:any) => void,
}