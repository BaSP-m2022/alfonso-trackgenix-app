import { useState } from 'react';
import styles from './Form.module.css';
import Form from 'Components/Shared/Form';
import * as thunks from 'redux/timesheets/thunks';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useEffect } from 'react';

function AddTimeSheets(props) {
  const [tasks, setTasks] = useState('');
  const { showCreateModal, handleClose } = props;
  const dispatch = useDispatch();
  const schema = Joi.object({
    employeeId: Joi.string().alphanum().length(24).required().messages({
      'string.empty': 'This field must be complete',
      'string.length': 'Employee ID must be 24 characters long',
      'string.alphanum': 'Employee ID must only contain alpha-numeric characters'
    }),
    projectId: Joi.string().alphanum().length(24).required().messages({
      'string.empty': 'This field must be complete',
      'string.length': 'Employee ID must be 24 characters long',
      'string.alphanum': 'Employee ID must only contain alpha-numeric characters'
    }),
    date: Joi.date().less('now').required().messages({
      'date.base': 'This field must be complete',
      'date.less': 'Date is not valid'
    }),
    hours: Joi.number().min(1).max(24).required().messages({
      'number.base': 'This field must be complete',
      'number.min': 'This field must have at least 1 hour',
      'number.max': 'This field can not have more than 24 hours'
    }),
    approved: Joi.bool().optional(),
    taskId: Joi.string()
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: joiResolver(schema)
  });
  useEffect(() => {
    reset({
      employeeId: props.currentUser._id
    });
  }, []);

  const addTimeSheets = async (timeSheet) => {
    dispatch(thunks.addTimesheets(timeSheet));
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    addTimeSheets({
      ...data,
      employeeId: props.currentUser._id,
      approved: false
    });
    console.log(data);
    console.log('tasls ', tasks);
  };
  return (
    <section>
      <Form
        handleSubmit={handleSubmit(onSubmit)}
        showModal={showCreateModal}
        handleClose={handleClose}
        title="Add Time Sheet"
      >
        <div className={styles.container}>
          {props.role === 'PM' && (
            <div>
              <label htmlFor="employeeId">Employee ID</label>
              <input
                {...register('employeeId', { required: true })}
                type="text"
                placeholder="Employee ID"
              />
              {errors.employeeId?.type === 'string.empty' && (
                <p className={styles.error}>{errors.employeeId.message}</p>
              )}
            </div>
          )}
          <div>
            <label htmlFor="projectId">Project ID</label>
            <input
              {...register('projectId', { required: true })}
              type="text"
              placeholder="Project ID"
            />
            {errors.project?.type === 'string.empty' && (
              <p className={styles.error}>{errors.project.message}</p>
            )}
            {errors.project?.type === 'string.min' && (
              <p className={styles.error}>{errors.project.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input {...register('date', { required: true })} type="date" placeholder="YYYY-MM-DD" />
            {errors.date?.type === 'date.base' && (
              <p className={styles.error}>{errors.date.message}</p>
            )}
            {errors.date?.type === 'date.less' && (
              <p className={styles.error}>{errors.date.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input {...register('hours', { required: true })} type="number" placeholder="Hours" />
            {errors.hours?.type === 'number.base' && (
              <p className={styles.error}>{errors.hours.message}</p>
            )}
            {errors.hours?.type === 'number.min' && (
              <p className={styles.error}>{errors.hours.message}</p>
            )}
            {errors.hours?.type === 'number.max' && (
              <p className={styles.error}>{errors.hours.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="taskId">Task</label>
            <input
              {...register('taskId', { required: true })}
              type="text"
              placeholder="Task ID"
              value={tasks.name}
              onChange={(e) => setTasks(e.target.value)}
            />
          </div>
          {props.role === 'PM' && (
            <div>
              <label htmlFor="approved">Approved</label>
              <input {...register('approved', { required: true })} type="checkbox" />
            </div>
          )}
        </div>
      </Form>
    </section>
  );
}

export default AddTimeSheets;
