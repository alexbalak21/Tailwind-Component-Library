import React from 'react'

export interface TableColumn {
  key: string
  label: string
  render?: (value: any, row: any) => React.ReactNode
}

export interface TableProps {
  columns: TableColumn[]
  data: any[]
  striped?: boolean
  hover?: boolean
  bordered?: boolean
}

export function Table({ columns, data, striped = true, hover = true, bordered = true }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full text-sm ${bordered ? 'border-collapse border border-gray-300 dark:border-gray-700' : ''}`}>
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 text-left font-semibold text-gray-900 dark:text-white ${
                  bordered ? 'border border-gray-300 dark:border-gray-700' : 'border-b border-gray-300 dark:border-gray-700'
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                striped && index % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-900'
              } ${hover ? 'hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors' : ''}`}
            >
              {columns.map((col) => (
                <td
                  key={`${index}-${col.key}`}
                  className={`px-4 py-3 text-gray-700 dark:text-gray-300 ${
                    bordered ? 'border border-gray-300 dark:border-gray-700' : 'border-b border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
