import { FunctionComponent, useEffect, useState } from "react"
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import { People } from "../../data"
import { LayoutContainer } from "../../styled-components/layout.styled.components"
import { PersonInterface } from "../../models"
import { Checkbox } from "@mui/material"
import { useDispatch } from "react-redux"
import { addFavorites, addPeople } from "@/redux/states"
import store from "@/redux/store"

export interface HomeInterface {}

const Home: FunctionComponent<HomeInterface> = () => {

    const [selectedPeople, setSelectedPeople] = useState<PersonInterface[]>([]) 
    const pageSize = 5

    const dispatch = useDispatch()
    
    const findPerson = (person: PersonInterface) => !!selectedPeople.find(p => p.id === person.id)
    const filterPerson = (person: PersonInterface) => selectedPeople.filter(p => p.id !== person.id)

    const handleChangeCheckBox = (person: PersonInterface) => {
        const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople,  person]
        dispatch(addFavorites(filteredPeople))
        setSelectedPeople(filteredPeople)
    }

    const colums = [
        {
            field: "actions",
            type: "actions",
            sortable: false,
            headerName: "",
            minWidth: 30,
            renderCell: (params: GridRenderCellParams) => <> {
                <Checkbox 
                    size="small" 
                    checked={findPerson(params.row)} 
                    onChange={() => handleChangeCheckBox(params.row)}/>
                }
            </> 
        },
        {
            field: "name", 
            headerName: "Name", 
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</> 
        },
        {
            field: "category", 
            headerName: "Category", 
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</> 
        },
        {
            field: "company", 
            headerName: "Company", 
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</> 
        },
        {
            field: "levelOfHappiness", 
            headerName: "Level of happiness", 
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <> {params.value}</> 
        },
    ]

    useEffect(() => {
        dispatch(addPeople(People))
    },[]) 

    return (
        <LayoutContainer>
            <DataGrid 
                columns={colums}
                disableColumnSelector
                disableSelectionOnClick
                autoHeight
                getRowId={(row: any) => row.id}
                pageSize={pageSize}
                rowsPerPageOptions={[pageSize]}
                rows={store.getState().people}
            />
        </LayoutContainer>
    )
}

export default Home