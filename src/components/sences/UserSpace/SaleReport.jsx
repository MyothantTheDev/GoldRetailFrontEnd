import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokens } from "../../../theme";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
    GridActionsCellItem
  } from '@mui/x-data-grid';
import ToolBar from "../utils/ToolBar";
import Title from "../../Layout/Header";
import CustomDataGrid from "../../Layout/DataGrid";

const SaleReport = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    // TABLE COLUMS

    const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'username' , headerName: 'Student Name', width: 200 }, 
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    ];

    // DATA TABLE

    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Title title="Sale" subtitle="Sale Report" />
        </Box>
        <Box display="flex" width='30%' bgcolor={colors.primary[400]} sx={{ marginBottom: "30px" }} borderRadius="3px">
          <InputBase sx={{ ml:2, flex: 1 }} placeholder="Search" />
          <IconButton type='button' sx={{ p:1 }}>
            <SearchOutlinedIcon/>
          </IconButton>
        </Box> 
        <Box >
          <CustomDataGrid columns={columns} rows={[]} />
        </Box>
      </Box>
    )
}

export default SaleReport;