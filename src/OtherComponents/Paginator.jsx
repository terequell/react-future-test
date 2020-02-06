import React, { useState } from 'react'
import styles from '../Styles.module.css'

const Paginator = (props) => {
   const [currentPage, setCurrentPage] = useState(1)
   const pagesArray = []

   let pagesCount = Math.ceil(props.countRows / props.rowsPerPage)

   for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i)
   }

   return (
      <div>
         {pagesArray.map(el => <span onClick = {() => {props.onChangeCurrentUsers(el); setCurrentPage(el)}} className = {el === currentPage ? styles.current__page : styles.page__element}>{el}</span>)}
      </div>
   )
}

export default Paginator