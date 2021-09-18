
const UsersEditorInputRow = ({ id, progressDataValue, onChangeProgressDataValue }) => {
    return (

        <input key={id} type="text" id={id} value={progressDataValue} onChange={onChangeProgressDataValue} />

    )
}

export default UsersEditorInputRow