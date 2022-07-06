import styles from './home.module.css';
import Sidebar from '../Shared/Sidebar';
import Tablehome from 'Components/Shared/Tablehome';
import Loader from 'Components/Shared/Loader';
import Modal from 'Components/Shared/Modal';
import Button from 'Components/Shared/Button';
//import Form from 'Components/Shared/Form';
// import Button from 'Components/Shared/Button';
import { useState, useEffect } from 'react';
import Tableproject from 'Components/Shared/Tableproject';
import { useSelector } from 'react-redux';
import { appendErrors, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import {
  validationsFormProjectCreate,
  validationsFormProjectEdit,
  validationsFormSuperadminCreate,
  validationsFormSuperadminEdit
} from 'Components/Home/validations';

// ARREGLAR EL TABLEPROJECTS PARA Q TENGA 2 TABS, POR TASKS Y POR EMPLOYEES (TRABAJAR LA DATA EN LA TABLA POR PROJECTS)
// PONER EL BOTON PARA AGREGAR TASKS (ADENTRO DE LA TABLA O POR FUERA ?)
// AGREGAR FUNCIONES ONADD, ONEDIT, ONDELETE
// VER CONEXION CON TIMESHEETS
// VER Q LAS VALIDACIONES ESTAN BIEN
function Home() {
  const [screen, setScreen] = useState(false);
  const [data, setData] = useState([]);
  const [idProject, setIdProject] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState('');
  let isLoading = useSelector((state) => state.projects.isFetching);
  let headers = [];
  let keys = [];
  let validator;
  let title = '';
  const role = 'ADMIN';
  role === 'SUPERADMIN' ? (title = 'ADMINS') : (title = 'PROJECTS');
  useEffect(() => {
    // if para el home, else para el open project
    if (idProject === '') {
      // aca despues hago un switch con la peticion nueva de projects asociados al employee
      if (role === 'SUPERADMIN') {
        fetch(`${process.env.REACT_APP_API_URL}/admins`)
          .then((response) => response.json())
          .then((data) => setData(data.data));
      }
      if (role === 'ADMIN') {
        fetch(`${process.env.REACT_APP_API_URL}/projects`)
          .then((response) => response.json())
          .then((data) => setData(data.data));
      }
      if (role === 'PM' || role === 'EMPLOYEE') {
        fetch(`${process.env.REACT_APP_API_URL}/projects`)
          .then((response) => response.json())
          .then((data) => setData(data.data));
      }
    }
  }, [screen]);
  // headers and keys
  if (role === 'SUPERADMIN') {
    headers = ['Email', 'Password', 'Is Active ?'];
    keys = ['email', 'password', 'active'];
    if (method === 'POST') {
      validator = validationsFormSuperadminCreate;
    } else {
      validator = validationsFormSuperadminEdit;
    }
  } else {
    headers = ['Name', 'Description', 'Client Name', 'Start Date', 'End Date', 'Tasks', 'Team'];
    keys = ['name', 'description', 'clientName', 'startDate', 'endDate', 'tasks', 'team'];
    if (method === 'POST') {
      validator = validationsFormProjectCreate;
    } else {
      validator = validationsFormProjectEdit;
    }
  }
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: joiResolver(validator)
  });
  // funciones para crud
  const switcher = () => {
    setScreen(!screen);
  };
  const handleModal = (request, id) => {
    setIdProject(id);
    setShowModal(!showModal);
    setMethod(request);
  };
  // console.log('id: ', idProject);
  // const onSubmit = (data, e) => {
  //   e.preventDefault();
  //   const superAdmin = {
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     email: data.email,
  //     password: data.password,
  //     active: Boolean(data.active)
  //   };
  //   if (method === 'POST') {
  //     dispatch(thunks.addSuperadmin(superAdmin));
  //   } else if (method === 'PUT') {
  //     dispatch(thunks.editSuperadmins(superAdmin, ids));
  //   } else {
  //     alert('Something unexpected happened');
  //   }
  // };
  // console.log(errors);
  const onSubmit = (data) => {
    console.log('data:', data);
    // if (role === 'SUPERADMIN') {
    //   if (method === 'POST') {
    //     // metodo post
    //   } else {
    //     // metodo put
    //   }
    // } else {
    //   if (method === 'POST') {
    //     // metodo post
    //   } else {
    //     // metodo put
    //   }
    // }
  };
  if (screen) {
    const info = data.filter((data) => data._id === idProject);
    const dataTeam = info[0].team;
    const dataTasks = info[0].tasks;
    return (
      <>
        <Sidebar></Sidebar>
        <Loader isLoading={isLoading} />
        <Tableproject
          idProject={idProject}
          switcher={switcher}
          title={title}
          roleUser={role}
          dataTeam={dataTeam}
          dataTasks={dataTasks}
        />
      </>
    );
  } else {
    return (
      <section className={styles.container}>
        <Sidebar></Sidebar>
        <h2>Home</h2>
        <Loader isLoading={isLoading} />
        {role === 'SUPERADMIN' ? (
          <Modal
            showModal={showModal}
            handleClose={handleModal}
            modalTitle={method === 'POST' ? 'ADD ADMIN' : 'EDIT ADMIN'}
          >
            <form className={styles.formHome} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  {...register('email')}
                  error={appendErrors.email?.message}
                />
                {errors.email && <p className={styles.errorInput}>{errors.email?.message}</p>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  {...register('password')}
                  error={appendErrors.password?.message}
                />
                {errors.password && <p className={styles.errorInput}>{errors.password?.message}</p>}
              </div>
              <div className={styles.checkbox}>
                <label htmlFor="active">Active</label>
                <input
                  className={styles.inputsProfile}
                  type="checkbox"
                  name="active"
                  {...register('active')}
                />
              </div>
              <div className={styles.buttonsContainer}>
                {/* <button className={styles.buttonContinue} type="submit" value="CONTINUE">
                  {method === 'POST' ? 'CREATE' : 'EDIT'}
                </button> */}
                <Button width={'75px'} height={'30px'} type="submit" value="CONTINUE">
                  {method === 'POST' ? 'CREATE' : 'EDIT'}
                </Button>
              </div>
            </form>
          </Modal>
        ) : (
          <Modal
            showModal={showModal}
            handleClose={handleModal}
            modalTitle={method === 'POST' ? 'ADD PROJECT' : 'EDIT PROJECT'}
          >
            <form className={styles.formHome} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  error={appendErrors.name?.message}
                />
                {errors.name && <p className={styles.errorInput}>{errors.name?.message}</p>}
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  {...register('description')}
                  error={appendErrors.description?.message}
                />
                {errors.description && (
                  <p className={styles.errorInput}>{errors.description?.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="client">Client</label>
                <input
                  type="text"
                  placeholder="Client"
                  {...register('client')}
                  error={appendErrors.client?.message}
                />
                {errors.client && <p className={styles.errorInput}>{errors.client?.message}</p>}
              </div>
              <div>
                <label htmlFor="start date">Start Date</label>
                <input
                  type="date"
                  {...register('startDate')}
                  error={appendErrors.startDate?.message}
                />
                {errors.startDate && (
                  <p className={styles.errorInput}>{errors.startDate?.message}</p>
                )}
              </div>
              {/* <div>
            <label htmlFor="team">Team</label>
            <input type="text" placeholder="Team" />
          </div> */}
              <div className={styles.buttonsContainer}>
                {/* <button className={styles.buttonContinue} type="submit" value="CONTINUE">
                  {method === 'POST' ? 'CREATE' : 'EDIT'}
                </button> */}
                <Button width={'75px'} height={'30px'} type="submit" value="CONTINUE">
                  {method === 'POST' ? 'CREATE' : 'EDIT'}
                </Button>
              </div>
            </form>
          </Modal>
        )}
        <Tablehome
          openModal={handleModal}
          switcher={switcher}
          title={title}
          role={role}
          headers={headers}
          keys={keys}
          data={data}
          selectedProject={setIdProject}
        />
      </section>
    );
  }
}

export default Home;
