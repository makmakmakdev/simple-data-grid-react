import './DataGrid.css'
import DataHeader from './DataHeader'
import DataRow from './DataRow'

const DataGrid = ({titles, data}) => {
    return (
        <div className="dg-table">
            <DataHeader titles={titles}/>

            { data.map(d=><DataRow data={d}/>) }
            
        </div>
    )
}

export default DataGrid
