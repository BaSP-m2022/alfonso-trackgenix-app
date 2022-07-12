import React from 'react';
import { useState, useEffect } from 'react';
import styles from './employeeTimesheetTable.module.css';
import Button from '../Button/index.jsx';

function EmployeeTimesheetTable({
  title,
  headers,
  keys,
  data,
  role,
  onEdit,
  onAdd,
  onDelete,
  switcher,
  selectedTimesheet,
  onApprove
}) {
  const [indexPage, setIndexPage] = useState(1);
  const show = data.slice(10 * (indexPage - 1), 10 * indexPage);
  useEffect(() => {
    const maxIndexPage = data.length > 10 ? Math.floor((data.length - 0.01) / 10) + 1 : 1;
    if (indexPage < 1) {
      setIndexPage(1);
    }
    if (indexPage > maxIndexPage) {
      setIndexPage(maxIndexPage);
    }
  }, [data]);
  const openRow = (role, id) => {
    selectedTimesheet(id);
    if (role === 'ADMIN' || role === 'PM' || role === 'EMPLOYEE') {
      switcher();
    }
  };
  const nextPage = () => {
    if (data.length / 10 > indexPage) {
      setIndexPage(indexPage + 1);
    }
  };
  const previousPage = () => {
    if (indexPage > 1) {
      setIndexPage(indexPage - 1);
    }
  };
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Button width={'100px'} height={'40px'} fontSize={'15px'} onClick={() => onAdd()}>
        <i className="fa-solid fa-plus"></i>
        ADD
      </Button>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
            {role === `PM` && (
              <>
                <th>Approve</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {show.map((row) => {
            return (
              <tr className={styles.row} key={row._id}>
                {keys.map((key, index) => {
                  if (key === 'active') {
                    return (
                      <td>
                        <button>{row[key]}boolean</button>
                      </td>
                    );
                  }
                  return (
                    <td key={index} onClick={() => openRow(role, row._id)}>
                      {row[key]}
                    </td>
                  );
                })}
                <>
                  <td>
                    <Button
                      className={styles.buttonsRows}
                      width={'50px'}
                      height={'25px'}
                      fontSize={'13px'}
                      onClick={() => onEdit(row._id)}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => onDelete(row._id)}
                      width={'50px'}
                      height={'25px'}
                      fontSize={'13px'}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </Button>
                  </td>
                  <td>
                    {/* AGREGAR LOGICA AL SLIDER */}
                    {role === 'PM' && (
                      <label className={styles.switch}>
                        <input
                          type="checkbox"
                          id="approved"
                          name="approved"
                          value="approved"
                          onChange={() => onApprove(row._id)}
                        />
                        <span className={styles.slider} />
                      </label>
                    )}
                  </td>
                </>
              </tr>
              // )}
            );
          })}
        </tbody>
      </table>
      <div className={styles.buttons}>
        <div>
          <p>Page {indexPage}</p>
        </div>
        <div>
          <Button
            width={'50px'}
            height={'40px'}
            fontSize={'15px'}
            disabled={indexPage <= 1}
            onClick={() => previousPage()}
          >
            <i className="fa-solid fa-angle-left"></i>
          </Button>
        </div>
        <div>
          <Button
            width={'50px'}
            height={'40px'}
            fontSize={'15px'}
            disabled={indexPage >= data.length / 10}
            onClick={() => nextPage()}
          >
            <i className="fa-solid fa-angle-right"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTimesheetTable;
