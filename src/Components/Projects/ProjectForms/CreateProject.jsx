import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Form from 'Components/Shared/Form';
import styles from './projectForm.module.css';
import * as thunks from 'redux/projects/thunks';

const CreateProject = (props) => {
  const { showCreateModal, handleClose } = props;
  const initialValues = {
    name: '',
    description: '',
    clientName: '',
    startDate: '',
    endDate: '',
    // projectManager: '',
    team: [],
    tasks: []
  };
  const { allEmployees, allTasks } = props;

  const [project, setProject] = useState(initialValues);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const dispatch = useDispatch();
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .trim()
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .messages({
        'string.min': 'Name must contain 3 or more characters',
        'string.max': 'Name must contain 30 or less characters',
        'string.pattern.base': 'Name is not valid',
        'string.empty': 'This field is required'
      })
      .required(),
    description: Joi.string()
      .min(3)
      .max(200)
      .trim()
      .messages({
        'string.min': 'Description must contain 3 or more characters',
        'string.max': 'Name must contain 200 or less characters',
        'string.empty': 'This field is required'
      })
      .required(),
    clientName: Joi.string()
      .min(3)
      .max(30)
      .trim()
      .messages({
        'string.min': 'Client name must contain 3 or more characters',
        'string.max': 'Client name must contain 30 or less characters',
        'string.empty': 'This field is required'
      })
      .required(),
    startDate: Joi.date()
      .min('01-01-2000')
      .messages({
        'date.min': 'Start date must be after 01-01-2000',
        'date.base': 'Date is not valid',
        'date.empty': 'This field is required'
      })
      .required(),
    endDate: Joi.date()
      .greater(Joi.ref('startDate'))
      .less('12-31-2099')
      .allow('')
      .messages({
        'date.base': 'Date is not valid',
        'date.less': 'End date must be before 12-31-2099',
        'date.greater': 'End date must be after the start date',
        'any.ref': 'Start date is required'
      })
      .optional(),
    // projectManager: Joi.string()
    //   .min(3)
    //   .max(30)
    //   .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
    //   .messages({
    //     'string.min': 'Project manager name must contain 3 or more letters',
    //     'string.max': 'Project manager name must contain 30 or less letters',
    //     'string.empty': 'This field is required',
    //     'string.pattern.base': 'Name is not valid',
    //     'string.regex': 'Project manager name is not valid'
    //   })
    //   .required(),
    team: Joi.array(),
    tasks: Joi.array()
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: joiResolver(schema)
  });

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const submitNewProject = (data, e) => {
    const { name, description, clientName, startDate, endDate, projectManager } = data;
    e.preventDefault();
    let newBody = {};
    if (endDate.length < 10) {
      newBody = {
        name,
        description,
        clientName,
        startDate,
        projectManager,
        team: selectedEmployees,
        tasks: selectedTasks
      };
    } else {
      newBody = {
        ...data,
        team: selectedEmployees,
        tasks: selectedTasks
      };
    }
    dispatch(thunks.addNewProject(newBody));
  };

  const appendToSelectedEmployees = (id) => {
    const previousState = selectedEmployees;
    setSelectedEmployees([...previousState, id]);
    setProject({ ...project, team: '' });
  };

  const deleteFromSelectedEmployees = (id) => {
    setSelectedEmployees(selectedEmployees.filter((emp) => emp !== id));
  };

  const appendToSelectedTasks = (id) => {
    const previousState = selectedTasks;
    setSelectedTasks([...previousState, id]);
    setProject({ ...project, tasks: '' });
  };

  const deleteFromSelectedTasks = (id) => {
    setSelectedTasks(selectedTasks.filter((task) => task !== id));
  };

  return (
    <Form
      title="Create project"
      showModal={showCreateModal}
      handleSubmit={handleSubmit(submitNewProject)}
      handleClose={handleClose}
    >
      <label htmlFor="name">Name</label>
      <input
        {...register('name', { required: true })}
        name="name"
        type="text"
        placeholder="Project name"
        className={errors.name ? styles.inputError : styles.input}
      />
      <div className={styles.errorContainer}>
        {errors.name?.type ? <p className={styles.error}>{errors.name.message}</p> : null}
      </div>

      <label htmlFor="description">Description</label>
      <input
        {...register('description')}
        name="description"
        type="text"
        placeholder="Project description"
        className={errors.description ? styles.inputError : styles.input}
      />
      <div className={styles.errorContainer}>
        {errors.description?.type ? (
          <p className={styles.error}>{errors.description.message}</p>
        ) : null}
      </div>

      <label htmlFor="clientName">Client Name</label>
      <input
        {...register('clientName')}
        name="clientName"
        type="text"
        placeholder="Client name"
        className={errors.clientName ? styles.inputError : styles.input}
      />
      <div className={styles.errorContainer}>
        {errors.clientName?.type ? (
          <p className={styles.error}>{errors.clientName.message}</p>
        ) : null}
      </div>

      <label htmlFor="startDate">Start Date</label>
      <input
        {...register('startDate')}
        name="startDate"
        type="date"
        className={errors.startDate ? styles.inputError : styles.input}
      />
      <div className={styles.errorContainer}>
        {errors.startDate?.type ? <p className={styles.error}>{errors.startDate.message}</p> : null}
      </div>

      <label htmlFor="endDate">End Date</label>
      <input
        {...register('endDate')}
        name="endDate"
        type="date"
        className={errors.endDate ? styles.inputError : styles.input}
      />
      <div className={styles.errorContainer}>
        {errors.endDate?.type ? <p className={styles.error}>{errors.endDate.message}</p> : null}
      </div>

      {/* <label htmlFor="projectManager">Project Manager</label>
      <input
        {...register('projectManager')}
        name="projectManager"
        type="text"
        placeholder="Project manager"
        className={errors.projectManager ? styles.inputError : styles.input}
      />
      <div className={styles.errorContainer}>
        {errors.projectManager?.type ? (
          <p className={styles.error}>{errors.projectManager.message}</p>
        ) : null}
      </div> */}

      <label htmlFor="team">Team</label>
      <input
        value={project.team}
        onChange={handleInputChanges}
        name="team"
        type="text"
        placeholder="Search an employee"
        className={styles.input}
      />
      <div className={styles.optionContainer}>
        {project.team.length > 0
          ? allEmployees
              .filter(
                (employee) =>
                  employee.email.match(new RegExp(project.team, 'i')) ||
                  employee.firstName.match(new RegExp(project.team, 'i'))
              )
              .map((member) => {
                return (
                  <p
                    key={member._id}
                    onClick={() =>
                      selectedEmployees.find((emp) => emp === member._id)
                        ? deleteFromSelectedEmployees(member._id)
                        : appendToSelectedEmployees(member._id)
                    }
                    className={
                      selectedEmployees.find((emp) => emp === member._id)
                        ? styles.selectedItem
                        : styles.notSelectedItem
                    }
                  >
                    {member.firstName}: {member.email}
                  </p>
                );
              })
          : selectedEmployees.map((member) => {
              return (
                <p
                  key={member}
                  className={styles.chip}
                  onClick={() => deleteFromSelectedEmployees(member)}
                >
                  {allEmployees.find((emp) => emp._id === member).firstName} (
                  {allEmployees.find((emp) => emp._id === member).email})
                </p>
              );
            })}
      </div>
      <label htmlFor="tasks">Tasks</label>
      <input
        value={project.tasks}
        onChange={handleInputChanges}
        name="tasks"
        type="text"
        placeholder="Search a task"
        className={styles.input}
      />
      <div className={styles.optionContainer}>
        {project.tasks.length > 0
          ? allTasks
              .filter(
                (task) =>
                  task.taskName.match(new RegExp(project.tasks, 'i')) ||
                  task.taskDescription.match(new RegExp(project.tasks, 'i'))
              )
              .map((task) => {
                return (
                  <p
                    key={task._id}
                    onClick={() =>
                      selectedTasks.find((item) => item === task._id)
                        ? deleteFromSelectedTasks(task._id)
                        : appendToSelectedTasks(task._id)
                    }
                    className={
                      selectedTasks.find((item) => item === task._id)
                        ? styles.selectedItem
                        : styles.notSelectedItem
                    }
                  >
                    {task.taskName}: {task.taskDescription}
                  </p>
                );
              })
          : selectedTasks.map((task) => {
              return (
                <p key={task} className={styles.chip} onClick={() => deleteFromSelectedTasks(task)}>
                  {allTasks.find((item) => item._id === task).taskName}:{' '}
                  {allTasks.find((item) => item._id === task).taskDescription}
                </p>
              );
            })}
      </div>
    </Form>
  );
};

export default CreateProject;
