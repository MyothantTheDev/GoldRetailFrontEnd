import { DataGrid } from '@mui/x-data-grid';

const CustomDataGrid = ( {selectedRow, CustomToolBar, rows, columns} ) => {
  return (
    <DataGrid 
      columns={columns}
      rows={rows}
      // editMode="rows"
      // initialState={{
      //   pagination: {
      //     paginationModel: {
      //       pageSize: 5,
      //     }
      //   }
      // }}
      // pageSizeOptions={[5]}
      // checkboxSelection
      // onRowSelectionModelChange={selectedRow}
      // slots={{ toolbar: CustomToolBar }}
    />
  )
}

export default CustomDataGrid