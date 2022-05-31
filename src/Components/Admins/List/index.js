import { useEffect, useState } from 'react';
import style from '../List/list.module.css';
import ListItem from '../ListItem';
// import Btn from '../Btn';

function List() {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/admins`)
      .then((response) => response.json())
      .then((response) => {
        setAdmins(response.data);
      });
  }, []);
  const deleteAdmin = async (id) => {
    const war = confirm('Sure you want to remove it?');
    if (war) {
      await fetch(`http://localhost:4000/admins/${id}`, {
        method: 'DELETE'
      });
      setAdmins(admins.filter((admin) => admin._id !== id));
    }
  };
  return (
    <div className={style.container}>
      <a href="http://localhost:3000/admins-add">
        Add/edit
        {/* <Btn color="green" text="Add/Edit" /> */}
      </a>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {superAdmins.lengh > 0 ? 'hay cosas' : 'nada'} */}
          {admins.map((admin) => (
            <ListItem
              key={admin._id}
              admin={admin}
              //   id={admin._id}
              //   firstName={admin.name}
              //   lastName={admin.lastName}
              //   active={admin.active}
              //   email={admin.email}
              onDelete={deleteAdmin}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default List;