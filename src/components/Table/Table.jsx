import React from "react"
import { TableWrapperStyle } from "./Table.style"

const Table = ({ className, columns, data }) => {

  const [border, setBorder] = React.useState(false)
  const ref = React.useRef(null);

  React.useEffect(() => {
    const scrollWrapper = ref.current;

    scrollWrapper.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = React.useCallback(() => {
    const scrollTolLeft = ref.current.scrollLeft;
    if (!scrollTolLeft) {
      return setBorder(false)
    }
    setBorder(true)
  }, []);

  return (
    <TableWrapperStyle ref={ref} className={className}>
      <table className={border ? 'with-border' : ''}>
        <thead>
        <tr>
          {columns.map((item, index) => {
            return (
              <th key={index}>{item}</th>
            )
          })}
        </tr>
        </thead>
        <tbody>

        {data.map((row, index) => <tr
          key={index}>{row.map((cell, cellIndex) => <td
          key={cellIndex}>{cell}</td>)}</tr>)}
        </tbody>
      </table>
    </TableWrapperStyle>
  )
}

export default Table
