import React from 'react'

export default function Alert(props) {
  return (
    props.value.result && <div className={`alert alert-warning alert-dismissible fade show bg-${props.value.color}`} style={{color:(props.value.color==='warning')?'black':'white'}} role="alert">
        <strong>Comment: </strong> {props.value.result}
</div>
  )
}
