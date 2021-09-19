
const UsersEditorInputRow = ({ id, progressDataValue, onChangeProgressDataValue }) => {
    return (

        <div>
            <label htmlFor={id}>Day {id+1}:</label>
            <input key={id} type="text" id={id} value={progressDataValue} onChange={onChangeProgressDataValue} />
        </div>

    )
}

export default UsersEditorInputRow