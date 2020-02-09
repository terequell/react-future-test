import React, { useState, useEffect } from 'react'
import { Table, Spinner, Button } from 'react-bootstrap'
import Tableelement from './Tableelement'
import axios from 'axios'
import Paginator from '../OtherComponents/Paginator'
import SearchForm from '../Forms/SearchForm'
import ExtendInfo from '../OtherComponents/ExtendInfo'
import AddNewUserForm from '../Forms/AddNewUserForm'

const Tabledata = (props) => {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [currentKit, setCurrentKit] = useState(null)
   const [currentUsers, setCurrentUsers]  = useState([])
   const [sortState, setSortState] = useState({dir: true, col:null})
   const [searchData, setSearchData] = useState(null)
   const [currentUser, setCurrentUser] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const [addUserFlag, setAddUserFlag] = useState(false)
   const [isError, setIsError] = useState(false)

   const rowsPerPage = 32

   useEffect(() => {
      const axiosData = async () => {
         try {
         setCurrentKit(props.dataKit)
         setIsLoading(true)
         const response = await axios(props.dataKit)
         setData(response.data)
         setIsLoading(false)
         }  
         catch (error) {
            setIsError(true)
         }  
      }
      if (props.dataKit !== currentKit) {
         setIsError(false)
         axiosData()
      }  
      data.length > (rowsPerPage + 1) ? onChangeCurrentUsers(currentPage) : setCurrentUsers([...data])
   }, [data, props.dataKit])

   const onSortTable = (nameCol) => {
      if (sortState.dir || nameCol !== sortState.col) {
         setCurrentUsers(currentUsers.slice(0).sort((a,b) => a[nameCol] > b[nameCol] ? 1 : -1))
         setSortState({...sortState, dir: false, col:nameCol})
      }  
      else {
         setCurrentUsers(currentUsers.slice(0).sort((a,b) => a[nameCol] > b[nameCol] ? -1 : 1))
         setSortState({...sortState, dir: true, col:nameCol})
      }
   }

   const onChangeCurrentUsers = (pageNumber) => {
      setCurrentPage(pageNumber)
      let leftBorder = rowsPerPage * (pageNumber - 1)
      let rightBorder = rowsPerPage * pageNumber

      setCurrentUsers(data.slice(0).slice(leftBorder, rightBorder))
      setSortState({...sortState, col:null})
   }

   const checkSearch = (el) => {
      if (searchData) {
         // eslint-disable-next-line eqeqeq
         return el.id.toString().includes(searchData) || el.firstName.toString().includes(searchData) || el.lastName.toString().includes(searchData) || el.email.toString().includes(searchData) || el.phone.toString().includes(searchData)
      }
      else return true
   }

   const addNewUser = (user) => {
      setData([...data, user])
   }

   return (
      isLoading ? (isError ? <p>Something went wrong. Please, refresh page or connect with developers.</p> : <Spinner animation="border"/>) 
      :<div>
         <SearchForm submitForm = {setSearchData}/>
         <Button variant = 'primary' onClick = {() => setAddUserFlag(!addUserFlag)}>Add new user</Button>
         {addUserFlag ? <AddNewUserForm addNewUser = {addNewUser}/> : null}
         {data.length > rowsPerPage ? <Paginator countRows = {data.length} rowsPerPage = {rowsPerPage} onChangeCurrentUsers = {onChangeCurrentUsers}/> : null} 
         <Table striped bordered>
            <thead>
               <tr>
                  <th onClick = {() => onSortTable('id')}>id {sortState.col === 'id' ? (sortState.dir ? '↓' : '↑') : null }</th>
                  <th onClick = {() => onSortTable('firstName')}>firstName {sortState.col === 'firstName' ? (sortState.dir ? '↓' : '↑') : null }</th>
                  <th onClick = {() => onSortTable('lastName')}>lastName {sortState.col === 'lastName' ? (sortState.dir ? '↓' : '↑') : null }</th>
                  <th onClick = {() => onSortTable('email')}>email {sortState.col === 'email' ? (sortState.dir ? '↓' : '↑') : null }</th>
                  <th onClick = {() => onSortTable('phone')}>phone {sortState.col === 'phone' ? (sortState.dir ? '↓' : '↑') : null }</th>
               </tr>
            </thead>
            <tbody>
               {currentUsers.slice(0)
                  .filter(el => checkSearch(el))
                  .map(el => <Tableelement  setCurrentUser = {setCurrentUser} user = {el}/>)}
            </tbody>
         </Table>
         {currentUser ? <ExtendInfo currentUser = {currentUser}/> : null}
      </div>
   )
}

export default Tabledata