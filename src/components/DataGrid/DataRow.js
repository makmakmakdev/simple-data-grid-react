import DataCell from './DataCell'

const DataRow = ({data}) => {
    const values = [];

    Object.entries(data).forEach(
        ([key, value]) => values.push(value)
    )

    return (
        <div key={data.id} className="dg-row">      
            {values.map(v=><DataCell value={v}/>)}
        </div>
    )
}

export default DataRow
