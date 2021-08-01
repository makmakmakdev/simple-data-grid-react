import DataHeaderCell from './DataHeaderCell'

const DataHeader = ({titles}) => {
    return (
        <div className="dg-header">
            { titles.map(title => <DataHeaderCell title={title}/>) }
        </div>
    )
}

export default DataHeader